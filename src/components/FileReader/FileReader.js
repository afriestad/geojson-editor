import React from 'react';
import {FilePlus} from 'react-feather';

import styles from './FileReader.module.css';

class FileReader extends React.Component {
  render = () => {
    return (
      <div style={{display: "inline-block"}}>
      <div className={styles.fileReaderButton}>
        <span>Read GeoJSON file</span> <FilePlus className={styles.fileReaderButtonIcon} />
      </div>
      </div>
    )
  }
}

export default FileReader;
