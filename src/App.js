import React from 'react';
import ElapsedTime from './ElapsedTime';
import StartButton from './StartButton';
import StopButton from './StopButton';

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
        <StartButton handleClick={this._toggleIsRunning} />
        <StopButton handleClick={this._toggleIsRunning} />
      </div>
    );
  }

  _toggleIsRunning = () => {
    this.setState({
      isRunning: !this.state.isRunning
    });
  }

  _tick = () => {
    // console.log('tick')
    // intentionally using an instance variable, not state
    // we'll use the variable to determine when to increase this.state.time
    this.clock++;

    if (this.clock % 60 === 0) {
      if (this.state.isRunning) {
        console.log('clock tick');
        this.setState({
          time: this.state.time + 1
        });
      }
    }

    // This causes the browser to call our _tick
    // method every 60th of a second (roughly)
    requestAnimationFrame(this._tick);
  }
}
export default App;
