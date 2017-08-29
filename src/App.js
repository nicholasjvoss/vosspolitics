import React, { Component } from 'react';
import store from './store';

//components
import List from './pages/ui-homepage/HomePage';

//styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <List
        className="App command"
        store={ store } />
    );
  }
}

export default App;
