import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: ""
    };
  }
  componentDidMount() {
    document.title = `clicked ${this.state.counter} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("Updated");
    document.title = `clicked ${this.state.counter} times`;
    }
    
  }
  incrementCount = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={this.incrementCount}>
          Count {this.state.counter}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
