import React from 'react'
import App from '../App'
import Home from '../components/Home'
import { Switch, Route } from 'react-router-dom'
import Restaurant from '../components/Restaurant';
export default (
  <Switch>
    <Route exact path='/' component={App} />
    <Route path='/Home' component={Home} />
    <Route path='/Restaurant' component={Restaurant} />
    {/* <Route path="/:id" component={Child} /> */}
  </Switch>
)
