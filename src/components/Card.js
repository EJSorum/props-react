import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {
    constructor(props) {
      super(props)
      this.state = {
         firstName: 'Eric',
         lastName: 'Sorum'
      }
    }
    greetUser= () => {
        alert(`Hello ${this.props.firstName} ${this.props.lastName}`)
    }
  render() {
    return (
    <div className="card">
          <h1>Card</h1>
          <h2>User name: {this.props.firstName} {this.props.lastName}</h2>
          <button onClick={this.greetUser}>Greet User</button>
    </div>

    )
  }
}

export default Card