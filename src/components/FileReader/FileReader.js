import React from 'react';
import {FilePlus} from 'react-feather';

import { connect } from 'react-redux';

import {filesSelectedForUpload} from '../../actions/FileReaderActions';

import styles from './FileReader.module.css';

class FileReader extends React.Component {
  constructor(props) {
    super(props);
    
    this.fileField = document.createElement("INPUT");
    this.fileField.setAttribute("type", "file");
    this.fileField.setAttribute("multiple", "true");
    this.fileField.addEventListener("change", this.onFileSelected);
  }
  
  onClickUpload = () => {
    this.fileField.click();
  }
  
  onFileSelected = e => {
    let files = e.target.files;
    this.props.filesSelected(files);
    for (let file of files) {
      console.log(file.name, file.size, file.type);
    }
  }
  
  render = () => {
    return (
      <div style={{display: "inline-block"}}>
      <div className={styles.fileReaderButton} onClick={this.onClickUpload}>
        <span>Read GeoJSON file</span> <FilePlus className={styles.fileReaderButtonIcon} />
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  uploadedFiles: state.files.fileList,
})

const mapDispatchToProps = dispatch => ({
  filesSelected: (fileList) => dispatch(filesSelectedForUpload(fileList)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FileReader);
