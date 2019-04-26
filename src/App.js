import React from 'react';
import Stopwatch from './Stopwatch';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      howMany: 1
    }
  }

  render() {
    let stopwatches = [];
    for (let i=0; i<this.state.howMany; i++) {
      stopwatches = [
        ...stopwatches,
        <Stopwatch />
      ]
    }
    return (
      <div className="App">
        <button onClick={this._addStopwatch}>+</button>
        {stopwatches}
      </div>
    );
  }

  _addStopwatch = () => {
    this.setState({
      howMany: this.state.howMany + 1
    });
  }

}
export default App;
