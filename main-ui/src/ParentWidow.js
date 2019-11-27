import React from 'react';

class ParentWidow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
    this.handleMessageTextBoxChangeEvent = this.handleMessageTextBoxChangeEvent.bind(this)
    this.handleSendToQueueButton = this.handleSendToQueueButton.bind(this)
  }

  handleMessageTextBoxChangeEvent(event) {
    const textData = event.target.value
    this.setState({ message: textData })
    console.log(textData)
  }


  handleSendToQueueButton() {
    fetch('http://localhost:8081/api/message/'+ this.state.message);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleMessageTextBoxChangeEvent}
        />
        <button onClick={this.handleSendToQueueButton}>
          Send to Queue</button>
      </div>
    );
  }
}

export default ParentWidow;
