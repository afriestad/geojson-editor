const GEOJSON_PARSED_SUCCESSFULLY = "GEOJSON_PARSED_SUCCESSFULLY";

function geoJsonParsedSuccessfully(parsed_json) {
  return {
    type: GEOJSON_PARSED_SUCCESSFULLY,
    parsed_json
  }
}

export {
  GEOJSON_PARSED_SUCCESSFULLY,
};

export {
  geoJsonParsedSuccessfully,
};
