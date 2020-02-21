import React from 'react';

import styles from "./MapLayer.module.css"

class MapLayer extends React.Component {  
  componentDidRender = () => {
    if (!this.props.context) {
      // On first render, save the canvas 2d context to props for ease of access
      this.props.context = this.refs[this.props.id].getContext("2d")
    }
  }
  
  render = () => (
    <canvas ref={this.props.id} className={styles.canvasStyle} />
  )
}

export default MapLayer;