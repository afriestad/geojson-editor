import { combineReducers } from 'redux-loop';

import {reducer as toastrReducer} from 'react-redux-toastr';

import fileReaderReducer from './reducers/FileReaderReducers';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  
  files: fileReaderReducer,
});

export default rootReducer;