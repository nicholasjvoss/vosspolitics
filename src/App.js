import React, { Component } from 'react';
import PolStore from './store';

//components
import List from './pages/ui-homepage/HomePage';

//styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <List
        className="App command"
        store={ PolStore } />
    );
  }
}

export default App;
