
// create react component
class ToggleButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOn: true
    }
  }

  // set button on state
  BClick = () => {
    this.setState({ 
      isOn: !this.state.isOn
    })
  }

  render() {
    return React.createElement(
      'button', 
      {onClick: () => {this.BClick()}},
      `Button ${this.state.isOn ? "On" : "Off"}`
    )
  }
}




// render the component with createElement
const domContainer = document.querySelector('#button-container')
ReactDOM.render(React.createElement(ToggleButton), domContainer)
