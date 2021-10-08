import React from 'react'

class College extends React.Component {
  render() {
    return <p> College {this.props.name} with address {this.props.location} </p>
  }
}
 
export default College