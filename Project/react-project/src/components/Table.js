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
 
    // // connect to mongo db with mongoose
    // // local host mongodb connecting string including which db to connect
    // const connectionString = "mongodb://localhost:27017/admin"   // connecting to admin db

  
    // // connect to mongo db
    // mongoose.connect(connectionString, { useNewUrlParser: true})
    // .then(
    //   () => {console.log("Mongoose connected successfully")},                // connected
    //   err => {console.log("Mongoose could not connect to database" + err)} // econnection error
    // )



  }
    


  render() {
    return (
      <div>

        <DataGrid columns={this.state.columns} rows={this.state.rows} />
      </div>
    )
  }
}

export default Table