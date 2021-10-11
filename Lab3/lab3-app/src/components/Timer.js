import React from 'react'
import Moment from 'react-moment'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      time: <Moment format="HH:mm:ss" />
    }
  }


  render() {
    return (
      <div>
        <span>{this.state.time}</span>
      </div>
    )
  }
}

export default Timer