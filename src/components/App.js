import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = props =>
  <div className="App">
    <h2 className="App-header">
      Team {props.match.params.teamId}
    </h2>
  </div>;

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      teamId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default App;
