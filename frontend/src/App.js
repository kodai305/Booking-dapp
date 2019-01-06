import React, { Component } from 'react';
import './App.css'; 

// containers
import Home from './containers/Home';
import Issue from './containers/Issue';
import Reserve from './containers/Reserve';
import ConfirmTicket from './containers/ConfirmTicket';
import MyTicketPage from './containers/MyTicketPage';
// Route関連
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// 不明なRouteは全てNotFound
const NotFound = () => {
  return(
    <h2>ページが見つかりません</h2>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/issue" component={Issue} />
              <Route exact path="/reserve" component={Reserve} />
              <Route exact path="/confirmTicket" component={ConfirmTicket} />
              <Route exaxt Path="/myTicketPage" component={MyTicketPage} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
