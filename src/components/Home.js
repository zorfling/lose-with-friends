import React, { Component } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import './App.css';

class Home extends Component {
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.history.push(`/team/${slugify(this.teamInput.value)}`);
  }

  render() {
    return (
      <div className="App">
        <h2 className="App-header">Lose with Friends</h2>
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
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
