import { combineReducers } from 'redux-loop';

import {reducer as toastrReducer} from 'react-redux-toastr';

import fileReaderReducer from './reducers/FileReaderReducers';
import mapReducer from './reducers/MapReducers';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  
  files: fileReaderReducer,
  map: mapReducer
});

export default rootReducer;