import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gamezone from './Components/GameZone/Gamezone';
import PlayerSelect from './Components/PlayerSelect/PlayerSelect';


export class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={PlayerSelect} />
                        <Route exact path="/gamezone" component={Gamezone} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routing
