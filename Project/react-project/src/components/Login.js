import React from 'react'
import {Button, Form, Card} from 'react-bootstrap/'

class Login extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }
  
  handleUnameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handleUpwdChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)  
    
    // send request to server
  }


  render() {
    return (
      <div style={{ height: "100%"}}>
        <Card style={{ width: '500px', margin: 'auto', marginTop: '200px' }}>
          <Card.Header>
            <h1>Admin Login</h1>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>🌎 User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" onChange={this.handleUnameChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>🔒 Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.handleUpwdChange}/>
              </Form.Group>
              <Button style={{width: '100%', margin: 'auto'}} variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}


export default Login