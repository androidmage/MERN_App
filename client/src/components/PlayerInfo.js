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
        let totals = keys.slice(6, 22);
        let advancedStats = keys.slice(22, 42);
        let perGame = keys.slice(44, 61);
        let shooting = keys.slice(61, 86);
        return (
            <div className="card-holder">
                <Card className="stat-card">
                    <img src={require('../../public/headshots/' + player['slug'] + '.jpg')} alt="Player Headshot"/>
                </Card>
                <Card className="stat-card">
                    <CardContent>
                        <Typography variant="h6">
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
                        <Typography variant="h6">
                            Per Game
                        </Typography>
                        {perGame.map((pgKey) => (
                            <Typography variant="body2" component="p" style={{}}>
                                <b>{pgKey.substring(9)}</b>{': ' + player[pgKey]}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>
                <Card className="stat-card">
                    <CardContent>
                        <Typography variant="h6">
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
                        <Typography variant="h6">
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