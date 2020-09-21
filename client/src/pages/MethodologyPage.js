import React from 'react';
import { Container } from 'reactstrap';
import Typography from '@material-ui/core/Typography';

import './MethodologyPage.css';

const MethodologyPage = () => (   
    <Container>
        <br/>
        <Typography variant="h3" className="center">
            Redefining NBA Player Roles
        </Typography>
        <br/>
        <Typography variant="h5">
            Motivation
        </Typography>
        <Typography variant="body1">
            In an increasily positionless game, it is difficult to describe players using just
            5 positions (point guard, shooting guard, small forward, power forward, and center).
            Players like Anthony Davis or Ben Simmons may shift from power forward to center or
            point guard to power forward. My goal for this project is to more accurately capture
            a player's role on the court by defining NBA Player Archetypes.
        </Typography>
        <br/>
        <Typography variant="h5">
            Methodology
        </Typography>
        <Typography variant="body1">
            <ul>
                <li>Scraped player data from basketball reference
                    <ul>
                        <li>
                            I scraped seasons 2014-2015 to 2018-2019 because the NBA started to use
                            video tracking tools in every arena starting in the 2013-2014 season. The
                            adoption of video analytics by every team marks the beginning of what I consider
                            the most recent analytics era and is why I chose to scrape starting from 2014-2015
                            season.
                        </li>
                        <li>
                            Data: I selected only players who played 500 or more minutes for the season.
                            Statistics: biological info, season totals, advanced stats,
                            per game stats, and shooting splits
                        </li>
                    </ul>
                </li>
                <li>
                    Clustering
                    <ul>
                        <li>
                            K-Means: I used a variety of methods to find an optimal number of clusters
                            <ul>
                                <li>
                                    Elbow Method: There is not a clear elbow but there appears to be
                                    diminishing returns after 5 clusters. Since we are already starting
                                    with 5 positions, this does not provide much useful information.
                                    <img src={require("./cluster_img/Elbow_method.png")}
                                    className="image-with-text" alt="Elbow Method"/>
                                </li>
                                <li>
                                    Gap statistic: I used the gap statistic as an improvement to the
                                    elbow method to limit within cluster dispersion. The gap values
                                    reached a steady growth at around 12 clusters so I went with it.
                                    <img src={require("./cluster_img/gap_values.png")}
                                    className="image-with-text" alt="Gap Values"/>
                                </li>
                                <li>
                                    PCA: I graphed the clusters using the two main principal components.
                                    <img src={require("./cluster_img/Cluster_visualization.png")}
                                    className="image-with-text" alt="Cluster Visualization"/>
                                </li>
                            </ul>
                        </li>
                        <li>
                            DBSCAN: Many of the data fields such as points per game were continuous and
                            dense. This characteristic made it difficult to run DBSCAN which depends on
                            density. The results either yielded only a few clusters if my distance threshold
                            was too high or way too many clusters if my distance threshold was low (many players
                            were their own cluster). I chose not to use this model.
                        </li>
                        <li>
                            Hierarchical: I chose not to use this model because I could not find a good way
                            to choose the number of clusters (dendogram not conclusive).
                        </li>
                    </ul>
                </li>
            </ul>
        </Typography>
        <br/>
        <Typography variant="h5">
            NBA Archetype Results
        </Typography>
        <Typography variant="body1">
            <ol>
                <li>
                    Spot-up 3pt Shooters
                    <ul>
                        <li>
                            JJ Reddick, Seth Curry, Terrence Ross
                        </li>
                    </ul>
                </li>
                <li>
                    Midrange Assassins
                    <ul>
                        <li>
                            Carmelo Anthony, Dirk Nowitzki, Khris Middleton
                        </li>
                    </ul>
                </li>
                <li>
                    Defensive Bench Wings
                    <ul>
                        <li>
                            Jamychal Green, Rondae Hollis-Jefferson
                        </li>
                    </ul>
                </li>
                <li>
                    Athletic Lob-threats
                    <ul>
                        <li>
                            Dwight Howard, Stephen Adams, Ben Simmons
                        </li>
                    </ul>
                </li>
                <li>
                    Average Wing
                    <ul>
                        <li>
                            Iman Shumpert, Normal Powell, Semi Ojeleye
                        </li>
                    </ul>
                </li>
                <li>
                    Two-way Rim Running Big
                    <ul>
                        <li>
                            Giannis, Anthony Davis, Lamarcus Aldridge
                        </li>
                    </ul>
                </li>
                <li>
                    Defensive Bench Bigs
                    <ul>
                        <li>
                            Bismack Biyombo, Khem Birch, Daniel Theis
                        </li>
                    </ul>
                </li>
                <li>
                    Offensive Bigs
                    <ul>
                        <li>
                            Jonas Valanciunas, Enes Kanter
                        </li>
                    </ul>
                </li>
                <li>
                    Scoring Bench Guard
                    <ul>
                        <li>
                            Austin Rivers, Cory Joseph, Trey Burke
                        </li>
                    </ul>
                </li>
                <li>
                    Elite Scorer and Playmaker
                    <ul>
                        <li>
                            Lebron James, James Harden, Steph Curry, Russell Westbrook
                        </li>
                    </ul>
                </li>
                <li>
                    Perimeter Defenders
                    <ul>
                        <li>
                            Andre Iguodala, Patrick Beverly, Robert Covington
                        </li>
                    </ul>
                </li>
                <li>
                    Floor Generals
                    <ul>
                        <li>
                            Kyle Lowry, Chris Paul, Ricky Rubio
                        </li>
                    </ul>
                </li>
            </ol>
        </Typography>
        <br/>
        <Typography variant="h5">
            More Thoughts
        </Typography>
        <Typography variant="body1">
            <ul>
                <li>
                    Player Growth: When players develop, do they get better at their current
                    role or grow into a new role? It seems like they grow into a new role.
                    Look at these MIP (Most Improved Player) award winners the year they won
                    <ul>
                        <li>
                            CJ McCollum: Scoring Bench Guard => Midrange Assassin
                        </li>
                        <li>
                            Pascal Siakam: Perimeter Defender => Two-way Rim Running Big
                        </li>
                    </ul>
                </li>
                <li>
                    Championship Roles:
                    <ul>
                        <li>
                            2016 Cavaliers:
                            <ul>
                                <li>Lebron James: Elite Scorer and Playmaker</li>
                                <li>Kyrie Irving: Floor General</li>
                                <li>JR Smith: Spot-up 3pt Shooter</li>
                                <li>Tristan Thompson: Offensive Big</li>
                                <li>Kevin Love: Midrange Assassin</li>
                            </ul>
                        </li>
                        <li>
                            2018 Warriors:
                            <ul>
                                <li>Steph Curry: Elite Scorer and Playmaker</li>
                                <li>Kevin Durant: Elite Scorer and Playmaker</li>
                                <li>Draymond Green: Perimeter Defender</li>
                                <li>Andre Iguodala: Average Wing</li>
                                <li>Klay Thompson: Midrange Assassin</li>
                            </ul>
                        </li>
                        <li>
                            2019 Raptors:
                            <ul>
                                <li>Kawhi Leonard: Elite Scorer and Playmaker</li>
                                <li>Kyle Lowry: Floor General</li>
                                <li>Danny Green: Spot-up 3pt Shooter</li>
                                <li>Pascal Siakam: Two-way Rim Running Big</li>
                                <li>Marc Gasol: Midrange Assassin</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Typography>
        
        
    </Container> 
);

export default MethodologyPage;