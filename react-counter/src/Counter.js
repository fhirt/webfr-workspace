import React from 'react';
import { Button } from 'reactstrap';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import { FaPlus, FaMinus, FaUndo } from 'react-icons/fa';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 2 });
  }
  decrement() {
    this.setState({ counter: this.state.counter -1 });
  }
  reset() {
    this.setState({ counter: 0 });
  }
  render() {
    const nrStyle = {
      textAlign: 'center',
      fontSize: '320px',
      margin: '10px'
    };
    return (
      <div>
        <p style={nrStyle}>{this.state.counter}</p>
        <Button color="dark" onClick={this.increment}>
          <FaPlus />
        </Button>&nbsp;
        <Button color="secondary" onClick={this.decrement}>
          <FaMinus />
          </Button>&nbsp;
          <Button color="danger" onClick={this.reset}>
          <FaUndo />
        </Button>&nbsp;
          {this.props.message}
      </div>
    )
  }
}
