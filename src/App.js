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
    this.clock = 0;    // ignore this, it goes with a different branch. hahahahahaha
  }

  componentDidMount() {
    console.log('componentDidMount: starting clock');
    setInterval(() => {
      console.log('interval function got called');
      if (this.state.isRunning) {
        console.log('clock tick');
        // this.state.time++; // NOOOOOoOOOooooOO
        this.setState({
          time: this.state.time + 1
        });
      }
    }, 1000); // call once a second
  }
  
  render() {
    console.log('i\'m rendering!');
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
      isRunning: !this.state.isRunning  // Use the ! operator to flip the boolean
    });
  }

}
export default App;
