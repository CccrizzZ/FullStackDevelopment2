import React from 'react'
import DataGrid from 'react-data-grid'
import axios from 'axios'



class ChatTable extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      columns: [
        { key: 'ID', name: 'ID' },
        { key: 'Date', name: 'Date' },
        { key: 'Time', name: 'Time' },
        { key: 'Sender', name: 'Sender' },
        { key: 'Receiver', name: 'Receiver'},
        { key: 'Message', name: 'Message'},
        { key: 'Room', name: 'Room'}
        
      ],
      rows: [

      ]
    }




  }

  componentDidMount(){

    axios.get("http://127.0.0.1:8080/chat").then((response) => {
        this.setState({rows: response.data})
    })

  }
    
  componentWillUnmount(){

  }

  render() {
    return (
      <div style={{width: '62%', margin: 'auto'}}>
        <DataGrid columns={this.state.columns} rows={this.state.rows} style={{height: '500px'}} />
      </div>
    )
  }
}

export default ChatTable