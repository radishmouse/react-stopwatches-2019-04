import React from 'react';
import ElapsedTime from './ElapsedTime';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0
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
      </div>
    );
  }

  _tick = () => {
    // console.log('tick')
    // intentionally using an instance variable, not state
    // we'll use the variable to determine when to increase this.state.time
    this.clock++;

    if (this.clock % 60 === 0) {
      console.log('clock tick');
      this.setState({
        time: this.state.time + 1
      })
    }

    // This causes the browser to call our _tick
    // method every 60th of a second (roughly)
    requestAnimationFrame(this._tick);
  }
}
export default App;
