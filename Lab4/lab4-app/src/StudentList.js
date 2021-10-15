import React from 'react'
import axios from 'axios'
import DeleteStudent from './DeleteStudent'
import AddStudent from './AddStudent'

class UserList extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      users: []
    }
  }

  refresh = () => {
    console.log("refresh")

    // axios get request 
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.setState({
        users: res.data
      })
    })
  }

  componentDidMount(){
    this.refresh()

    console.log("Did mount called")
  }

  render() { 
    return <div> 
    {this.state.users.map((user, index) => 
      <div key={index}>
        <p> {user.name} </p> 
        <DeleteStudent id={index} />
      </div>
    )} 
    <AddStudent refresh={this.refresh}/>
    </div>
  }
}
 
export default UserList