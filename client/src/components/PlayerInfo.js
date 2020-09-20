import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


import './PlayerInfo.css';

class PlayerAutocomplete extends Component {

    render() {
        const player = this.props.player[0];
        let keys = []
        for (var key in player) {
            keys.push(key);
        }
        let basics = [...keys.slice(3,6), ...keys.slice(42,44)];
        let totals = keys.slice(6, 22);
        let advancedStats = keys.slice(22, 42);
        let perGame = keys.slice(44, 61);
        let shooting = keys.slice(61, 86);
        return (
            <div className="flexible">
                <div>
                    <Card className="stat-card mx-auto">
                        <CardContent>
                            <Typography variant="h6" className="center">
                                Basic Info
                            </Typography>
                            <div className="flexible">
                                <img src={require('../../public/headshots/' + player['slug'] + '.jpg')} alt="Player Headshot"/>
                                <div>
                                    <Typography variant="subtitle1">
                                        <b>Archetype: </b>{player['cluster_num']}
                                    </Typography>
                                    {basics.map((bKey) => (
                                        <Typography variant="body2" component="p">
                                            <b>{bKey}</b>{': ' + player[bKey]}
                                        </Typography>
                                    ))}
                                </div>
                                
                            </div>
                            
                        </CardContent>
                    </Card>
                    <div className="flexible">
                        <Card className="stat-card">
                            <CardContent>
                                <Typography variant="h6" className="center">
                                    Season Totals
                                </Typography>
                                {totals.map((totalKey) => (
                                    <Typography variant="body2" component="p">
                                        <b>{totalKey}</b>{': ' + player[totalKey]}
                                    </Typography>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className="stat-card">
                            <CardContent>
                                <Typography variant="h6" className="center">
                                    Per Game
                                </Typography>
                                {perGame.map((pgKey) => (
                                    <Typography variant="body2" component="p" style={{}}>
                                        <b>{pgKey.substring(9)}</b>{': ' + player[pgKey]}
                                    </Typography>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
                
                
                
                <Card className="stat-card">
                    <CardContent>
                        <Typography variant="h6" className="center">
                            Advanced Stats
                        </Typography>
                        {advancedStats.map((advKey) => (
                            <Typography variant="body2" component="p">
                                <b>{advKey}</b>{': ' + player[advKey]}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>
                <Card className="stat-card">
                    <CardContent>
                        <Typography variant="h6" className="center">
                            Shooting Splits
                        </Typography>
                        {shooting.map((sKey) => (
                            <Typography variant="body2" component="p">
                                <b>{sKey}</b>{': ' + player[sKey]}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>
            </div>
            
        );
    }
}

PlayerAutocomplete.propTypes = {
    player: PropTypes.array.isRequired
}

export default PlayerAutocomplete;