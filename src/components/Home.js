import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goToRestaurant: false
    }
  }
  render() {
    return (
      <>
        <p>This is the Home Component</p>
        <div> <p onClick={() => this.setState({ goToRestaurant: true })}>Click me to go to the Restaurant page</p></div>
        {this.state.goToRestaurant ? <Redirect to='/restaurant' /> : null}
      </>
    )
  }
}
export default Home
