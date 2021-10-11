import React from 'react'
import Timer from './Timer'
import LikeButton from './LikeButton'

class Comment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: props.comment
    }

  }

  render() {
    return(
      <div style={{display: 'flex', border: '1px solid green'}}>
        <Timer />
        <span style={{paddingLeft: 50, paddingRight: 50, color: 'blue'}}>{this.state.comment}</span>
        <LikeButton />
      </div>
    )
  }
}



export default Comment