import React from 'react';
import ElapsedTime from './ElapsedTime';
import StartButton from './StartButton';
import StopButton from './StopButton';

class Stopwatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      originalClock: this.props.clock, // the first clock value passed in
      pausedFor: 0,
      isRunning: true
    } 
  }

  componentDidMount() {
    console.log('starting clock');
    setInterval(() => {
        if (!this.state.isRunning) {
            this.setState({
                pausedFor: this.state.pausedFor + 1
            })
        }
    }, 1000);
  }
  
  render() {
    let clockValue = this.props.clock - this.state.originalClock - this.state.pausedFor;
    return (
      <div className="Stopwatch">
        <ElapsedTime time={clockValue} />
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
