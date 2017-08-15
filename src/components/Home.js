import React, { Component } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import Wrapper from './Wrapper';
import Header from './Header';

class Home extends Component {
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.history.push(`/team/${slugify(this.teamInput.value)}`);
  }

  render() {
    return (
      <Wrapper>
        <Header>Lose with Friends</Header>
        <form onSubmit={evt => this.handleSubmit(evt)}>
          <input
            ref={input => {
              this.teamInput = input;
            }}
            type="text"
            name="team"
            placeholder="Enter team name"
          />
          <input type="submit" value="Enter team" />
        </form>
      </Wrapper>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
