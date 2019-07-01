import React, { Component } from "react";
import Button from "./button.js";
import Wrapper from "./wrapper.js";
import "./App.css";

class App extends Component {
  state = {
    timer: ""
  };

  countdownInterval = 0;

  removeTime = () => {
    let newTime = this.state.timer - 1;
    this.setState({
      timer: newTime
    });
    if (newTime === 0) {
      alert("Timer complete");
      clearInterval(this.countdownInterval);
    }
  };

  handleChange = evt => {
    let userTime = evt.target.value;
    console.log("userTime is ", userTime);
    this.setState({
      timer: userTime
    });
  };

  startTimer = () => {
    this.countdownInterval = setInterval(this.removeTime, 1000);
  };

  stopTimer = () => {
    clearInterval(this.countdownInterval);
  };

  resetTimer = () => {
    clearInterval(this.countdownInterval);
    this.setState({
      timer: ""
    });
  };

  render() {
    const { timer } = this.state;
    return (
      <div className="App">
        <p> Timer: {timer} </p>
        <Wrapper>
          <Button clickHandler={this.startTimer} name={"Start"} />
          <Button clickHandler={this.stopTimer} name={"Pause"} />
          <Button clickHandler={this.resetTimer} name={"Clear"} />
          <input
            type="text"
            name="timer"
            value={this.state.timer}
            onChange={this.handleChange}
          />
        </Wrapper>
      </div>
    );
  }
}

export default App;
