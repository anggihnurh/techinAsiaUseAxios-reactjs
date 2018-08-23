import React, { Component } from 'react';
import NewsDetail from './container/newsdetail/NewsDetail';
import NavbarTech from './components/header/NavBar';
import HomePage from './container/news/Home';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTech />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:slug" component={NewsDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
