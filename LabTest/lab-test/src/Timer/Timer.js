import React from 'react'
import moment from 'moment'
import LogItem from './LogItem'
import Clock from './Clock'

class Timer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      startTime: "",
      endTime: "",
      durationM: "",
      durationS: "",
      isClockOn: false,
      timerLog: []
    }
  }

  // clock start
  handleStart = () => {
    this.setState({
      startTime:  moment(),
      endTime: "",
      isClockOn: true,
    })

  }


  // clock stop
  handleStop = () => {
    if (this.state.startTime==="") {
      return
    }

    // update end time and durations
    this.setState({
      endTime: moment(),
      durationM: moment.duration(moment().diff(moment(this.state.startTime))).minutes(),
      durationS: moment.duration(moment().diff(moment(this.state.startTime))).seconds(),
      // timerLog: [...this.state.timerLog, ("Duration => " + moment.duration(moment().diff(moment(this.state.startTime))).minutes() + " minutes : " + moment.duration(moment().diff(moment(this.state.startTime))).seconds() + "seconds")]
    }, () => {
      this.setState({
        timerLog: [...this.state.timerLog, ("Duration => " + this.state.durationM + " minutes : " + this.state.durationS + "seconds")],
        isClockOn: false
        
      })
    })

  
  }

  
  // clock reset
  handleReset = () => {
    this.setState({
      startTime: "",
      endTime: "",
      durationS: "",
      durationM: "",
      isClockOn: false,
      timerLog:[]
    })
  }



  render() { 
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span>Start Time:</span>
              </td>
            </tr>
            <tr>
              <td>
                <input id="txtStartTime" type="text" value={moment(this.state.startTime).format("hh:mm:ss:SS") === "Invalid date" ? "": moment(this.state.startTime).format("hh:mm:ss")} readOnly /> 
              </td>
            </tr>
            <tr>
              <td>
                <span>End Time:</span>
              </td>
            </tr>
            <tr>
              <td>
                <input id="txtEndTime" type="text" value={moment(this.state.endTime).format("hh:mm:ss:SS")==="Invalid date"?"":moment(this.state.endTime).format("hh:mm:ss")} readOnly />
              </td>
            </tr>
            <tr>
              <td>
                <button id="btnStart" type="button" onClick={this.handleStart}  >Start</button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="btnStop" type="button" onClick={this.handleStop} >Stop</button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="btnReset" type="button" onClick={this.handleReset} >Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div id="timerwindow" style={{backgroundColor:"mediumseagreen"}}>
          <Clock startTime={this.state.startTime} on={this.state.isClockOn}/>

          <span>Log Items:</span>
          <div>
            {this.state.timerLog.map((time, index) => 
              <LogItem key={index} logTime={time} />
            )}
          </div>
        </div>

      </div>
    )
  }
}
 
export default Timer
