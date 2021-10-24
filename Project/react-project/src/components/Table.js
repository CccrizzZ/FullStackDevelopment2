import React from 'react'
import DataGrid from 'react-data-grid'
// import mongoose from 'mongoose'
// import Chat from '../schemas/ChatHistory'
// import Event from '../schemas/EventHistory'


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
      ]
    }

  }

  componentDidMount(){
    // load data from db
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