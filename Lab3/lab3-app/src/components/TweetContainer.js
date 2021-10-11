import React from 'react'
import Comment from './Comment'

class TweetContainer extends React.Component {
  constructor(props) {
    super(props)

    // set initial states
    this.state = {
      title: props.title,
      // array of comments
      comments: [],
      // post input
      postInput: ""
    }

  }


  // this function add a new comment component to the comment div
  FormSubmit = (e) => {
    e.preventDefault()
    if (this.state.postInput === "") {
      return
    }

    // define key
    let key = this.state.comments.length

    this.setState({
      // add comment to the comments array in state
      comments: [...this.state.comments, <Comment key={key} comment={this.state.postInput}/>],
      
      // clear input state
      postInput: ""
    })


  }


  // function that update user input
  updateInput(input) {

    this.setState({
      postInput: input
    })

  }


  render(){
    return (
      <div style={{border: '1px solid blue', margin: '50px', width: '80%'}}>
        <h1>{this.state.title}</h1>
        <form onSubmit={this.FormSubmit}>
          <input type="text" value={this.state.postInput} onChange={(e) => this.updateInput(e.target.value)} />
          <button type="submit">Post</button>
        </form>
        
        <div>
          
          <Comment comment={"ok sure"}/>
          <Comment comment={"I dont think so"}/>
          {this.state.comments.map((comment) => comment)}
          
        </div>
      </div>
    )

  }
}


export default TweetContainer 