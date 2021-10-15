import React from 'react'
import axios from 'axios'


class AddStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }

  
  }

  refresh = () => {
    this.props.refresh()
  }


  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()


    // post event
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: this.state.name
    })
    .then((response) => {
      console.log(response)
      this.refresh()
  
    })
    .catch((error) => {
      console.log(error)
    })



  }



  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <button type="submit">add</button>
        </form>

      </div>
    )
  }
}
 
export default AddStudent;