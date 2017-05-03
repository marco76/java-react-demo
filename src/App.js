import React, { Component } from 'react';
import './App.css';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
import {FirstPage} from './component/FirstPage';

class App extends Component {
  render() {
    return (

        <HashRouter>
            <div>
                <Route exact path="/" component={FirstPage} />
                <Route path="dashboard" component={FirstPage} />
                <Route path="users" component={FirstPage} />
            </div>
        </HashRouter>
    )
  }
}
export default App;
