import React from 'react';

import './FileReader.css';

class FileReader extends React.Component {
  render = () => {
    return <input type="file" id="file-upload" />
  }
}

export default FileReader;
