const FILES_SELECTED_FOR_UPLOAD = "FILES_SELECTED_FOR_UPLOAD";
const FILES_CATEGORISED_SUCCESSFULLY = "FILES_CATEGORISED_SUCCESSFULLY";
const GEOJSON_READ_SUCCESSFULLY = "GEOJSON_READ_SUCCESSFULLY";

const GEOJSON_TO_PARSE = "GEOJSON_TO_PARSE";
const MAP_FILES_SELECTED = "MAP_FILES_SELECTED";
const OTHER_FILES_SELECTED = "OTHER_FILES_SELECTED";

function filesSelectedForUpload(fileList) {
  return {
    type: FILES_SELECTED_FOR_UPLOAD,
    files: fileList,
  }
}

function filesCategorisedSuccessfully([geoJsonFiles, mapFiles, otherFiles]) {
  return {
    type: FILES_CATEGORISED_SUCCESSFULLY,
    geoJsonFiles,
    mapFiles,
    otherFiles
  }
}

function geoJsonReadSuccessfully(files) {
  return {
    type: GEOJSON_READ_SUCCESSFULLY,
    files
  }
}

function geoJsonToParse(files) {
  return {
    type: GEOJSON_TO_PARSE,
    files
  }
}

function mapFilesSelected(files) {
  return {
    type: MAP_FILES_SELECTED,
    files
  }
}

function otherFilesSelected(files) {
  return {
    type: OTHER_FILES_SELECTED,
    files
  }
}

export {
  FILES_SELECTED_FOR_UPLOAD,
  FILES_CATEGORISED_SUCCESSFULLY,
  GEOJSON_READ_SUCCESSFULLY,
  GEOJSON_TO_PARSE,
  MAP_FILES_SELECTED,
  OTHER_FILES_SELECTED,
}

export {
  filesSelectedForUpload,
  filesCategorisedSuccessfully,
  geoJsonReadSuccessfully,
  geoJsonToParse,
  mapFilesSelected,
  otherFilesSelected,
}