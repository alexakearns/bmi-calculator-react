import React, { Component } from 'react'

export class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {bmi: "normal"}
  }
  render() {
    return (
      <div>
        <h1>BMI Calculator</h1>
      </div>
    )
  }
}

export default Calculator
