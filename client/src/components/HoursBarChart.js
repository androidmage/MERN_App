import React, { Component } from "react";
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { getHours } from '../actions/redditActions';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

class HoursBarChart extends Component {

  componentDidMount() {
    this.props.getHours();
  }

  render() {
    const hours = this.props.hours;
    if (hours.length > 0) {
        return (
            <Container>
              <Paper>
                <Chart
                data={hours}
                >
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                    valueField="count"
                    argumentField="_id"
                />
                <Title text="Hours vs # of Comments" />
                <Animation />
                </Chart>
            </Paper>
              
              
            </Container>
          );
    } else {
        return (
            <p>Bar Chart not available</p>
        )
    }
  }
}

HoursBarChart.propTypes = {
  getHours: PropTypes.func.isRequired,
  hours: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  hours: state.reddit.hours
});

export default connect(mapStateToProps, { getHours })(HoursBarChart);
