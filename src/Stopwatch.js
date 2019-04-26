import React from 'react';
import ElapsedTime from './ElapsedTime';
import StartButton from './StartButton';
import StopButton from './StopButton';

class Stopwatch extends React.Component {

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
    setInterval(() => {
      if (this.state.isRunning) {
        console.log('clock tick');
        this.setState({
          time: this.state.time + 1
        });
      }
    }, 1000); // call once a second
  }
  
  render() {
    return (
      <div className="Stopwatch">
        <ElapsedTime time={this.state.time} />
        <StartButton handleClick={this._toggleIsRunning} />
        <StopButton handleClick={this._toggleIsRunning} />
      </div>
    );
  }

  _toggleIsRunning = () => {
    this.setState({
      isRunning: !this.state.isRunning  // Use the ! operator to flip the boolean
    });
  }

}
export default Stopwatch;
