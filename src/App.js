import React, { Component } from 'react';

import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Spells from './components/spells';
import Monsters from './containers/container_monsters.js';
import logo from './logo.svg';
import { getMonsters } from './actions/actions.js';


class App extends Component {
  componentWillMount() {
     const getMonstersFunc = this.props.getMonsters;
     getMonstersFunc();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DND Tools</h2>
        </div>
        <div className="grid grid-960">
          <Monsters />
          {/*<Spells spells={this.state.spells}/>*/}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getMonsters
  }, dispatch);
}

App.propTypes = {
  getMonsters: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
// export default connect( (state) => ({spells: state.spells.all, monsters: state.monsters.all}), mapDispatchToProps)(App);
