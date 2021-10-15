import React from 'react'
import axios from 'axios'

class DeleteStudent extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      id: props.id
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // post event
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
      id: this.state.id
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() { 
    return <div><button onClick={this.handleSubmit}>Delete</button></div>
  }
}
 
export default DeleteStudent