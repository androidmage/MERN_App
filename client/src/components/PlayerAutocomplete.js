import React, { Component } from "react";
import { Container, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { getNames, getYears, getPlayer } from '../actions/playerActions';
import PropTypes from 'prop-types';
import PlayerInfo from './PlayerInfo.js';

import './PlayerAutocomplete.css';

class PlayerAutocomplete extends Component {

  state = {
    name: '',
    showPlayer: false
  }

  componentDidMount() {
    this.props.getNames();
  }

  onNameChange = (event, values) => {
    this.setState({ name: values, showPlayer: false })
    this.props.getYears(values);
  }

  onYearChange = (event, values) => {
    if (values != null) {
      this.setState({ showPlayer: true });
      this.props.getPlayer(this.state.name, values);
    } else {
      this.setState({ showPlayer: false });
    }
    
  }

  render() {
    const names = this.props.names;
    const years = this.props.years;
    let playerInfo;
    if (this.state.showPlayer && this.props.player.length > 0) {
      playerInfo = <PlayerInfo player={this.props.player} />;
    }
    return (
      <Container>
        <div className="colored">
          <br/>
          <h3>Search players by name and year</h3>
          <br/>
          <div className="row">
            <div className="form-group col-xs-6 input-autocomplete">
              <Autocomplete
                id="player-name"
                options={names}
                getOptionLabel={(option) => option}
                style={{ width: 250 }}
                onChange={this.onNameChange}
                renderInput={(params) => <TextField {...params} label="Player Name" variant="outlined" />}
              />
            </div>
            <div className="form-group col-xs-6 input-autocomplete">
              <Autocomplete
                id="player-year"
                options={years}
                getOptionLabel={(option) => String(option)}
                style={{ width: 150 }}
                onChange={this.onYearChange}
                value={this.state.year}
                renderInput={(params) => <TextField {...params} label="Year" variant="outlined" />}
              />
            </div>
          </div>
          <div>
            {playerInfo}
          </div>
        </div>
        
        
      </Container>
    );
  }
}

PlayerAutocomplete.propTypes = {
  getNames: PropTypes.func.isRequired,
  getYears: PropTypes.func.isRequired,
  getPlayer: PropTypes.func.isRequired,
  names: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  player: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  names: state.player.names,
  years: state.player.years,
  player: state.player.player
});

export default connect(mapStateToProps, { getNames, getYears, getPlayer })(PlayerAutocomplete);