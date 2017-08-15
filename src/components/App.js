import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Header from './Header';

const App = props =>
  <Wrapper>
    <Header>
      Team {props.match.params.teamId}
    </Header>
  </Wrapper>;

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      teamId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default App;
