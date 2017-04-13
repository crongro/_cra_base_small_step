import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

import contentReducer from '../reducer/content';
import {connect, Provider} from 'react-redux';
import { createStore } from 'redux';

const store = createStore(contentReducer);

const mapStateToProps = (state) => {
  return state;
}

const ContentContainer = connect(mapStateToProps)(Content);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <ContentContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
