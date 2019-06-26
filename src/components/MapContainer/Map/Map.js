import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Map extends Component {
  //   componentDidUpdate (prevProps, prevState) {
  //     if (prevProps.google !== this.props.google) {
  //       this.loadMap()
  //     }
  //   }

  componentDidMount () {
    this.loadMap()
  }

  loadMap () {
    if (this.props && this.props.google) {
      const { google } = this.props
      const maps = google.maps

      const mapRef = this.refs.map
      const node = ReactDOM.findDOMNode(mapRef)

      let zoom = 12
      let lat = 51.5074
      let lng = -0.12574
      const center = new maps.LatLng(lat, lng)
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      )
      this.map = new maps.Map(node, mapConfig)
    }
  }

  render () {
    return <div ref='map'>Oh..</div>
  }
}

export default Map
