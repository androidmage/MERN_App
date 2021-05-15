import React from 'react';
import { Container } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ];

const RedditPage = () => (   
    <Container>
        <br/>
        <Typography variant="h3" className="center">
            Reddit Metrics (r/torontoraptors)
        </Typography>
        <br/>
        <Typography variant="body1">
            Using Kafka, I am streaming reddit data from the r/torontoraptors subreddit.
            The metrics below are aggregating 24 hours of data.
            Powered by pushshift.io
        </Typography>
        <br/>
        <Typography variant="h5">
            Hours (EDT)
        </Typography>
        <Typography variant="body1">
            This is a bar chart of the hours vs # of comments in the subreddit.
        </Typography>
        <Paper>
            <Chart
            data={data}
            >
            <ArgumentAxis />
            <ValueAxis />

            <BarSeries
                valueField="population"
                argumentField="year"
            />
            <Title text="World population" />
            <Animation />
            </Chart>
        </Paper>
        <br/>
        <Typography variant="h5">
            Sentiment Analysis
        </Typography>
        <Typography variant="body1">
            This is a pie chart of the sentiment from the reddit comments in the past 24 hours.
        </Typography>
        <br/>

    </Container> 
);

export default RedditPage;
