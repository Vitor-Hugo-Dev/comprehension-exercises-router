import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/strict-access" >Strict Access</Link>
          <br />
          <Link to="/">Home</Link>
          <br />
          <Link to="/About" >About</Link>
          <br />
          <Link to="/Users/1" >Users</Link> 
        </div>
        <Switch>
          <Route path="/strict-access" render={ () => <StrictAccess user={ {userName: 'joao', password: 1234, firstName: 'João',} }/> } />
          <Route path="/Users/:id" render={ (props) => <Users {...props} greetingsMessage= "Good Morning"/> }/>
          <Route path="/About" component={ About }/>
          {/* <Route exact path="/Users" component={ Users } /> */}
          <Route path="/" component={ Home }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
