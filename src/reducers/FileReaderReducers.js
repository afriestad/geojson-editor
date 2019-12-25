import {FILES_SELECTED_FOR_UPLOAD} from '../actions/FileReaderActions';

const initialState = {
  fileList: []
};

function fileReaderReducer(state = initialState, action) {
  switch(action.type) {
    case FILES_SELECTED_FOR_UPLOAD:
      return {
        ...state,
        fileList: [...state.fileList, ...action.files]
      }
    default:
      return state
  }
}

export default fileReaderReducer;