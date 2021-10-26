import React from 'react'
import DataGrid from 'react-data-grid'
// import mongoose from 'mongoose'
// import Chat from '../schemas/ChatHistory'
// import Event from '../schemas/EventHistory'
import io from 'socket.io-client'

const socket = io('http://127.0.0.1:8080', {})

// const socket = io()



class Table extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      columns: [
        { key: 'type', name: 'Type' },
        { key: 'date', name: 'Date' }
      ],
      rows: [
        { date: 0, type: 'Example' },
        { date: 1, type: 'Demo' }
      ],
      socket: 0
    }




  }

  componentDidMount(){
    // this.setState({
    //   socket: webSocket('http://127.0.0.1:8080')
    // })

  }
    
  componentWillUnmount(){

  }

  render() {
    return (
      <div style={{width: '50%', margin: 'auto'}}>

        <DataGrid columns={this.state.columns} rows={this.state.rows} />
      </div>
    )
  }
}

export default Table