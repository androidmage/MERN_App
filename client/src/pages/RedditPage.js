import React from 'react';
import { Container } from 'reactstrap';
import Typography from '@material-ui/core/Typography';

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
