import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/home';
import Things from './components/things';
import Other from './components/other';
import NotFound from './components/notfound';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/other" component={Other}/>
          <Route path="/things/:thingID" component={Things}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
