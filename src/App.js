import React, { Component } from 'react';

import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppContent from './components/app_content';
import logo from './d20.svg';
import { initializeAppState } from './actions/actions.js';
import Menu from './containers/container_menu.js';


class App extends Component {
  componentWillMount() {
     this.props.initializeAppState();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DND Tools</h2>
          <Menu />
        </div>
        <AppContent />        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initializeAppState
  }, dispatch);
}

App.propTypes = {
  initializeAppState: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
// export default connect( (state) => ({spells: state.spells.all, monsters: state.monsters.all}), mapDispatchToProps)(App);
