import React from 'react';

import { connect } from 'react-redux';

import MapLayer from '../MapLayer/MapLayer';

import styles from "./MapViewer.module.css";

class MapViewer extends React.Component {
  
  // TODO:
  //  - Find another unique but persistent key generation scheme
  //  - Join all the kinds of layers into the same list, and mark them instead
  //  - Actually draw something on the canvasses
  generateLayerHashKey = (layer) => {
    // Graciously adapted from StackOverflow:
    // https://stackoverflow.com/a/7616484/10963216
    let s = JSON.stringify(layer), hash = 0, i, chr;
    if (s.length === 0) return hash;
    for (i = 0; i < s.length; i++) {
      chr = s.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      //hash |= 0; // convert to 32bit integer
    }
    return hash;
  }
  
  render = () => {
    return (
      <div className={styles.mapLayerContainer}>
      {
        this.props.cellLayers.map(layer => {
          let id = this.generateLayerHashKey(layer);
          return (<MapLayer key={id} id={id} json={layer} />)
        })
      }
      {
        this.props.markerLayers.map(layer => {
          let id = this.generateLayerHashKey(layer);
          return (<MapLayer key={id} id={id} json={layer} />)
        })
      }
      {
        this.props.riverLayers.map(layer => {
          let id = this.generateLayerHashKey(layer);
          return (<MapLayer key={id} id={id} json={layer} />)
        })
      }
      {
        this.props.routeLayers.map(layer => {
          let id = this.generateLayerHashKey(layer);
          return (<MapLayer key={id} id={id} json={layer} />)
        })
      }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  cellLayers: state.map.cellLayers,
  markerLayers: state.map.markerLayers,
  riverLayers: state.map.riverLayers,
  routeLayers: state.map.routeLayers
})

export default connect(mapStateToProps)(MapViewer);