const FILES_SELECTED_FOR_UPLOAD = "FILES_SELECTED_FOR_UPLOAD";

function filesSelectedForUpload(fileList) {
  return {
    type: FILES_SELECTED_FOR_UPLOAD,
    files: fileList,
  }
}

export {
  FILES_SELECTED_FOR_UPLOAD,
}

export {
  filesSelectedForUpload,
}