const FILES_SELECTED_FOR_UPLOAD = "FILES_SELECTED_FOR_UPLOAD";
const FILES_READ_SUCCESSFULLY = "FILES_READ_SUCCESSFULLY";

function filesSelectedForUpload(fileList) {
  return {
    type: FILES_SELECTED_FOR_UPLOAD,
    files: fileList,
  }
}

function filesReadSuccessfully(files) {
  return {
    type: FILES_READ_SUCCESSFULLY,
    files: files
  }
}

export {
  FILES_SELECTED_FOR_UPLOAD,
  FILES_READ_SUCCESSFULLY
}

export {
  filesSelectedForUpload,
  filesReadSuccessfully
}