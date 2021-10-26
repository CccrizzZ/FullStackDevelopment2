import React from 'react'
import DataGrid from 'react-data-grid'
// import mongoose from 'mongoose'
// import Chat from '../schemas/ChatHistory'
// import Event from '../schemas/EventHistory'
import io from 'socket.io-client/dist/socket.io'

// const socket = io.connect('http://127.0.0.1:8080')




class EventTable extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      columns: [
        { key: 'type', name: 'Type' },
        { key: 'date', name: 'Date' },
        { key: 'time', name: 'Time' },
        { key: 'user', name: 'User' },
        { key: 'eventid', name: 'EventID'},
        { key: 'PPID', name: 'PPID'}

      ],
      rows: [
        { date: 0, type: 'Example' },
        { date: 1, type: 'Demo' }
      ],
      socket: 0
    }




  }

  componentDidMount(){
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

export default EventTable