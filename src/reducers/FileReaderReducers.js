import { loop, Cmd } from 'redux-loop';

import {actions as toastrActions} from 'react-redux-toastr';

import {
  FILES_SELECTED_FOR_UPLOAD,
  FILES_CATEGORISED_SUCCESSFULLY,
  GEOJSON_READ_SUCCESSFULLY,
  GEOJSON_TO_PARSE,
  OTHER_FILES_SELECTED,
  MAP_FILES_SELECTED
} from '../actions/FileReaderActions';

import {
  geoJsonReadSuccessfully,
  filesCategorisedSuccessfully,
  geoJsonToParse,
  mapFilesSelected,
  otherFilesSelected
} from '../actions/FileReaderActions';

const initialState = {
  selectedFileList: [],
  geoJsonFiles: [],
  readFiles: [],
};

function categoriseSelectedFiles(fileList) {
  let geoJsonFiles = []
  let mapFiles = []
  let otherFiles = []
  for (let file of fileList) {
    if (file.name.length <= 5) {
      // Too short to be either map or geoJson
      otherFiles.push(file)
    }
    else if (file.name.substring(file.name.length - 4).toLowerCase() === ".map") {
      mapFiles.push(file)
    }
    else if (file.name.length >= 9 && file.name.substring(file.name.length - 8).toLowerCase() === ".geojson") {
      geoJsonFiles.push(file)
    }
    else {
      otherFiles.push(file)
    }
  }
  return [geoJsonFiles, mapFiles, otherFiles]
}

function readSelectedFiles(fileList) {
  let filePromises = []
  for (let file of fileList) {
    filePromises.push(file.text())
  }
  return Promise.all(filePromises)
}

function fileReaderReducer(state = initialState, action) {
  switch(action.type) {
    case FILES_SELECTED_FOR_UPLOAD:
      return loop(
        {
          ...state,
          selectedFileList: [...state.selectedFileList, ...action.files]
        },
        Cmd.run(categoriseSelectedFiles, {
          successActionCreator: filesCategorisedSuccessfully,
          args: [action.files]
        })
      )
    case FILES_CATEGORISED_SUCCESSFULLY:
      let cmds = [];
      
      if (action.geoJsonFiles.length) {
        cmds.push(Cmd.action(geoJsonToParse(action.geoJsonFiles)))
      }
      
      if (action.mapFiles.length) {
        cmds.push(Cmd.action(mapFilesSelected(action.mapFiles)))
      }
      
      if (action.otherFiles.length) {
        cmds.push(Cmd.action(otherFilesSelected(action.otherFiles)))
      }
    
      return loop(
        {
          ...state,
          selectedFileList: state.selectedFileList.filter(file => !action.geoJsonFiles.concat(action.mapFiles, action.otherFiles).includes(file)),
          geoJsonFiles: [...state.geoJsonFiles, ...action.geoJsonFiles],
        },
        Cmd.list(cmds)
      )
    case GEOJSON_TO_PARSE:
      return loop(
        state,
        Cmd.run(readSelectedFiles, {
          successActionCreator: geoJsonReadSuccessfully,
          args: [action.files]
        }
        )
      )
    case GEOJSON_READ_SUCCESSFULLY:
      return loop(
        {
        ...state,
        geoJsonFiles: state.geoJsonFiles.filter(file => !action.files.includes(file)),
        readFiles: [...state.readFiles, ...action.files]
        },
        Cmd.action(
          toastrActions.add({
            type: 'success',
            title: `Successfully Read ${action.files.length} .geojson Files`,
            message: `The following files were imported: ${state.geoJsonFiles.slice(state.geoJsonFiles.length - action.files.length).map(file => file.name).join(", ")}`,
            options: {
              timeOut: 0,
              progressBar: false,
            }
          })
        )
      )
    case MAP_FILES_SELECTED:
      return loop(
        state,
        Cmd.action(
          toastrActions.add({
              type: 'warning',
              title: '.map File Selected',
              message: `You selected one or more .map file(s), presumably downloaded from Azgaar's Fantasy Map Generator. Sadly, we do not currently support this format. Try uploading a cells .geojson file instead! Please check the following files: ${action.files.map(file => file.name).join(", ")}`,
              options: {
                timeOut: 0,
                progressBar: false,
              }
            })
          )
        )
    case OTHER_FILES_SELECTED:
      return loop(
        state,
        Cmd.action(
          toastrActions.add({
            type: 'warning',
            title: 'Unrecognised File Selected',
            message: `You selected one or more file(s) that we didn't recognise. We only currently support .geojson files. Please check the following files: ${action.files.map(file => file.name).join(", ")}`,
            options: {
              timeOut: 0,
              progressBar: false,
            }
          })
        )
      )
    default:
      return state
  }
}

export default fileReaderReducer;