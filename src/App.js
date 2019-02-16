import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Redirect } from 'react-router-dom'
import './App.css';
import { auth, googleProvider } from './firebase/firebase.js/index.js'
import routes from './router/routes'

class App extends Component {
  state = {
    user: {},
    anchorEl: null
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      }
    })
  }
  login = () => {
    auth.signInWithPopup(googleProvider).then(result => {
      const user = result.user
      this.setState({ user })
      // this.props.history.push('/home')
    })
  }
  logout = () => {
    auth.signOut().then(() => {
      this.setState({ user: {} })
    })
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      <div className="App">
        <Navbar login={this.login} logout={this.logout} user={this.state.user} anchorEl={this.state.anchorEl} handleClick={this.handleClick} handleClose={this.handleClose} />
        {routes}
        {Object.keys(this.state.user).length ? <Redirect to='/home' /> : null}
      </div>
    );
  }
}

export default App;
