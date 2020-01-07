import { loop, Cmd } from 'redux-loop';

import {
  FILES_SELECTED_FOR_UPLOAD,
  FILES_READ_SUCCESSFULLY,
} from '../actions/FileReaderActions';

import {filesReadSuccessfully} from '../actions/FileReaderActions';

const initialState = {
  fileList: []
};

function categoriseSelectedFiles(fileList) {
  let geoJsonFiles = []
  let mapFiles = false
  let otherFiles = false
  for (let file of fileList) {
    if (file.name.length <= 5) {
      // Too short to be either map or geoJson
      otherFiles = true
    }
    else if (file.name.substring(file.name.length - 4).toLowerCase() === ".map") {
      mapFiles = true
    }
    else if (file.name.length >= 9 && file.name.substring(file.name.length - 8).toLowerCase() === ".geojson") {
      geoJsonFiles.push(file)
    }
  }
  // Need to do something with this, and call it from somewhere
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
          fileList: [...state.fileList, ...action.files]
        },
        Cmd.run(readSelectedFiles, {
          successActionCreator: filesReadSuccessfully,
          args: [action.files]
        }
        )
      )
    case FILES_READ_SUCCESSFULLY:
      return {
        ...state,
        readFiles: action.files
      }
    default:
      return state
  }
}

export default fileReaderReducer;