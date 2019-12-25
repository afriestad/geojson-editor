import { combineReducers } from 'redux-loop';

import fileReaderReducer from './reducers/FileReaderReducers';

const rootReducer = combineReducers({
  files: fileReaderReducer,
});

export default rootReducer;