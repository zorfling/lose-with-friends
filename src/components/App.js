import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Header from './Header';
import base from '../base';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      teams: {
        'fun-with-flags': {
          name: 'Fun With Flags',
          units: 'kg',
          members: {
            zorfling: true,
          },
        },
      },
      users: {
        zorfling: {
          name: 'Chris',
          currentWeight: 115,
          teams: {
            'fun-with-flags': true,
          },
        },
      },
      weights: {
        zorfling: [
          {
            date: 1503010156,
            weight: 115.5,
          },
          {
            date: 1502841600,
            weight: 115.0,
          },
        ],
      },
    };
  }

  componentWillMount() {
    // this runs right before the app is rendered
    this.teamRef = base.syncState('teams', {
      context: this,
      state: 'teams',
    });
    this.userRef = base.syncState('users', {
      context: this,
      state: 'users',
    });
    this.weightRef = base.syncState('weights', {
      context: this,
      state: 'weights',
    });
    this.setState((prevState, props) => {
      const newState = { ...prevState };
      newState.teams[props.match.params.teamId] = {
        name: props.match.params.teamId,
      };
    });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          Team {this.props.match.params.teamId}
        </Header>
      </Wrapper>
    );
  }
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      teamId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default App;
