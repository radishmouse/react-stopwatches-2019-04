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
    // Buggy way to set the pause value.
    // Why? because it gets out of sync with the global clock.
    // setInterval(() => {
    //     if (!this.state.isRunning) {
    //         this.setState({
    //             pausedFor: this.state.pausedFor + 1
    //         })
    //     }
    // }, 1000);
  }

  // This method lets us manipulate state right before .render() is called.
  // It is called when new props are passed to the component.
  // We don't necessarily need to use any of the values from prop - we know that we get passed
  // new props each tick of the global clock.
  // If this Stopwatch is paused, when it receive a clock tick, we need to increment value of pausedFor.
  static getDerivedStateFromProps(props, state) {
    // getDerivedStateFromProps is like a `setState` every time you receive props.
    return {
        pausedFor: state.isRunning ? state.pausedFor : state.pausedFor + 1
    }
  }
  
  render() {
    // We calculate the new clock value based on the new clock value passed to us, minus when we started,
    // minus how long we're paused.
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
      isRunning: !this.state.isRunning,  // Use the ! operator to flip the boolean
      pausedFor: this.state.pausedFor - 1  // Weird way to make sure it doesn't subtract an extra second on paus.
    });
  }

}
export default Stopwatch;
