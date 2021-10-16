import React from 'react'
import Moment from "react-moment"


class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      running: props.on,
    }

  }
  
  // on receiving props 
  componentWillReceiveProps(newProps) {
    this.setState({
      running: newProps.on
    })
  }


  render() {
    return (
      <div>
        { this.state.running ? <Moment format="HH:mm:ss" interval={this.props.on ? 1000 : 0}/> : null }

      </div>
    )
  }
}


export default Clock