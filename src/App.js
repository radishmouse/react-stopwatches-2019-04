import React from 'react';
import ElapsedTime from './ElapsedTime';
import ControlButton from './ControlButton';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false
    }
    this.clock = 0;    
  }

  componentDidMount() {
    console.log('starting clock');
    requestAnimationFrame(this._tick);
  }
  
  render() {
    return (
      <div className="App">
        <ElapsedTime time={this.state.time} />
        <ControlButton label="play" handleClick={this._toggleIsRunning} />
        <ControlButton label="pause" handleClick={this._toggleIsRunning} />
      </div>
    );
  }

  _toggleIsRunning = () => {
    this.setState({
      isRunning: !this.state.isRunning  // Use the ! operator to flip the boolean
    });
  }

  // Our _tick method will get called 60 times per second.
  // We'll keep track of how many times it gets called using a variable.
  // Every 60th time it gets called, we will increment this.state.time
  _tick = () => {
    // Intentionally using an instance variable, not state.
    // We'll use this variable to determine whether to increase this.state.time
    this.clock++;

    if (this.clock % 60 === 0) {
      if (this.state.isRunning) {
        console.log('clock tick');
        this.setState({
          time: this.state.time + 1
        });
      }
    }

    // This is the browser function that causes the browser to call our _tick
    // 60 times per second.
    requestAnimationFrame(this._tick);
  }
}
export default App;
