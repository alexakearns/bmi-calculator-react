import React, { Component } from 'react'

export class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 168,
      weight: 62,
      bmi: 22.0,
      bmiClass: "normal"
    }
  }
  heightChange = (height) => {
    this.setState({ height: height })
  } 
  render() {
    return (
      <div>
        <h1>BMI Calculator</h1>
        <p>Enter your height:</p>
        <input
        type="text"
        name="height"
        ></input>
        <h3>Your height is {this.state.height}!</h3>
      </div>
    )
  }
}

export default Calculator
