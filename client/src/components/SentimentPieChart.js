import React, { Component } from "react";
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { getSentiments } from '../actions/redditActions';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import PieChart, {
    Legend,
    Export,
    Series,
    Label,
    Font,
    Connector
  } from 'devextreme-react/pie-chart';

class SentimentPieChart extends Component {

  componentDidMount() {
    this.props.getSentiments();
  }

  render() {
    const sentiments = this.props.sentiments;
    var labeled = [];
    for (var pos in sentiments) {
        var sentiment = sentiments[pos];
        switch (sentiment._id) {
            case 1:
                labeled.push({_id: 'Negative', count: sentiment.count})
                break;
            case 2:
                labeled.push({_id: 'Neutral', count: sentiment.count})
                break;
            case 3:
                labeled.push({_id: 'Positive', count: sentiment.count})
                break;
        }
    }
    if (labeled.length > 0) {
        return (
            <Container>
              <Paper>
                
                <PieChart id="pie"
                    palette="Bright"
                    dataSource={labeled}
                    title="Sentiment"
                >
                <Legend
                    orientation="horizontal"
                    itemTextPosition="right"
                    horizontalAlignment="center"
                    verticalAlignment="bottom"
                    columnCount={4} />
                    <Export enabled={true} />
                    <Series argumentField="_id" valueField="count">
                    <Label
                        visible={true}
                        position="columns"
                        customizeText={customizeText}>
                        <Font size={16} />
                        <Connector visible={true} width={0.5} />
                    </Label>
                    </Series>
                </PieChart>
            </Paper>
              
              
            </Container>
          );
    } else {
        return (
            <p>Pie Chart not available</p>
        )
    }
  }
}

function customizeText(arg) {
    return `${arg.valueText} (${arg.percentText})`;
  }

SentimentPieChart.propTypes = {
  getSentiments: PropTypes.func.isRequired,
  sentiments: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  sentiments: state.reddit.sentiments
});

export default connect(mapStateToProps, { getSentiments })(SentimentPieChart);
