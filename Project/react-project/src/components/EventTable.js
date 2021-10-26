import React from 'react'
import DataGrid from 'react-data-grid'
import axios from 'axios'




class EventTable extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      columns: [
        { key: 'Type', name: 'Type' },
        { key: 'Date', name: 'Date' },
        { key: 'Time', name: 'Time' },
        { key: 'User', name: 'User' },
        { key: 'EventID', name: 'EventID'},
        { key: 'PPID', name: 'PPID'}

      ],
      rows: [

      ]
    }

  }

  componentDidMount(){

    axios.get("http://127.0.0.1:8080/event").then((response) => {
      console.log(response)
      this.setState({
        rows: response.data
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