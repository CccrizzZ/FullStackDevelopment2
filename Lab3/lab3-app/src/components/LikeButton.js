import React from 'react'


class LikeButton extends React.Component {
  constructor(props) {
    super(props)

    // set initial states
    this.state = {
      likes: 0
    }
    
  }

  // member function for incrementing likes
  incrementLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.incrementLikes}>Like</button>
        <span>Likes:{this.state.likes}</span>
      </div>
    )
  }
}

export default LikeButton