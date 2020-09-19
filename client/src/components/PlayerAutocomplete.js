import React, { Component } from "react";
import { Container, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { getNames, getYears } from '../actions/playerActions';
import PropTypes from 'prop-types';

import './PlayerAutocomplete.css';

class PlayerAutocomplete extends Component {

  state = {
    year: ''
  }

  componentDidMount() {
    this.props.getNames();
  }

  onNameChange = (event, values) => {
    this.setState({ year: null })
    this.props.getYears(values);
  }

  onYearChange = (event, values) => {
    this.setState({ year: values });
  }

  render() {
    const names = this.props.names;
    const years = this.props.years;
    return (
      <Container>
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
        
      </Container>
    );
  }
}

PlayerAutocomplete.propTypes = {
  getNames: PropTypes.func.isRequired,
  getYears: PropTypes.func.isRequired,
  names: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  names: state.player.names,
  years: state.player.years
});

export default connect(mapStateToProps, { getNames, getYears })(PlayerAutocomplete);