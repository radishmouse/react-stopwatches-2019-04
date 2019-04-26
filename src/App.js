import React from 'react';
import Stopwatch from './Stopwatch';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      howMany: 1,
      clock: 0
    }
  }

  componentDidMount() {
    setInterval(() => {

      console.log('clock tick');
      this.setState({
        clock: this.state.clock + 1
      });

    }, 1000); // call once a second
  }

  render() {
    let stopwatches = [];
    for (let i=0; i<this.state.howMany; i++) {
      stopwatches = [
        ...stopwatches,
        <Stopwatch key={i} clock={this.state.clock}/>
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
