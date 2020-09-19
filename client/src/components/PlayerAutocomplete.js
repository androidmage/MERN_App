import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { getNames } from '../actions/playerActions';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 }
];

class PlayerAutocomplete extends Component {

  componentDidMount() {
    this.props.getNames();
  }

  test = () => {
    console.log('names: ' + this.props.names);
  }

  render() {
    const names = this.props.names;
    return (
      <div>
        <Autocomplete
          id="combo-box-demo"
          options={names}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      </div>
    );
  }
}

PlayerAutocomplete.propTypes = {
  getNames: PropTypes.func.isRequired,
  names: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  names: state.player.names
});

export default connect(mapStateToProps, { getNames })(PlayerAutocomplete);