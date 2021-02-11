import React, { Component } from 'react';
import logo from './logo.svg';

import { Provider }  from 'react-redux';
import ComicList from './components/ComicList';

import './App.css';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="comicContainer">
            <img src={logo} className="App-logo" alt="logo" />

            {/* Adding Simple Grid from Marvel API */}
            <ComicList/>
            
          </div>

        </div>
      </Provider>
    )
  }
}

export default App;
