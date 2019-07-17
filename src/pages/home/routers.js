import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

// 路由配置
import Index from "./subpage/index";


class Routers extends Component {
    render() {
        return (
            <Router basename={''}>
                <Switch>
                    <Route exact path="/" component={Index} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;