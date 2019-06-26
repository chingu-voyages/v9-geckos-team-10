import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat: 51.5074,
            lng: -0.12574
          }}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD9a7mfwLH4FEEeG4lLXRMIbPhMwu5jo7o'
})(MapContainer)
