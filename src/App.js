import React from 'react';
import './App.css';

import FileReader from './components/FileReader/FileReader';
import MapViewer from './components/MapViewer/MapViewer';

function App() {
  return (
    <div className="App">
      <FileReader />
      <MapViewer />
    </div>
  );
}

export default App;
