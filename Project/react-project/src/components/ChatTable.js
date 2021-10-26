import React from 'react'
import DataGrid from 'react-data-grid'
// import mongoose from 'mongoose'
// import Chat from '../schemas/ChatHistory'
// import Event from '../schemas/EventHistory'
import io from 'socket.io-client/dist/socket.io'

// const socket = io.connect('http://127.0.0.1:8080')

// const socket = io()



class ChatTable extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      columns: [
        { key: 'id', name: 'ID' },
        { key: 'date', name: 'Date' },
        { key: 'time', name: 'Time' },
        { key: 'sender', name: 'Sender' },
        { key: 'receiver', name: 'Receiver'},
        { key: 'message', name: 'Message'},
        { key: 'room', name: 'Room'}
        
      ],
      rows: [
        { date: 0, sender: 'Chat' },
        { date: 1, sender: 'Table' }
      ],
      socket: 0
    }




  }

  componentDidMount(){
    // this.setState({
    //   socket: webSocket('http://127.0.0.1:8080')
    // })
    fetch('http://localhost:8080')
    .then(response => {
      response.json().then(data => {
        this.setState({ items: data})

      })
    })
  }
    
  componentWillUnmount(){

  }

  render() {
    return (
      <div style={{width: '62%', margin: 'auto'}}>

        <DataGrid columns={this.state.columns} rows={this.state.rows} />
      </div>
    )
  }
}

export default ChatTable