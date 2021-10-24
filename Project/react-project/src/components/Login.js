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
  

  render() {
    return (
      <div style={{ height: "100%"}}>
        <Card style={{width: '500px', margin: 'auto', marginTop: '200px'}}>
          <Card.Header>
            <h1>Admin Login</h1>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" placeholder="Enter user name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button style={{width: '100%', margin: 'auto'}} variant="primary" type="submit">
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