import React, { Component } from 'react';

import './App.css';

// import Spells from './components/spells';
import Monsters from './containers/container_monsters.js';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Monsters />
        {/*<Spells spells={this.state.spells}/>*/}
      </div>
    );
  }
}

App.propTypes = {
  monsters: React.PropTypes.array,
  getMonsters: React.PropTypes.func
}

export default App;
// export default connect( (state) => ({spells: state.spells.all, monsters: state.monsters.all}), mapDispatchToProps)(App);
