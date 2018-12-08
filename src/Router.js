import { Switch, Route } from 'react-router-dom'
import React from 'react';
import MainContainer from './containers/Home/MainContainer'
import WebDesign from './containers/WebDesign';
import Music from './containers/Music';

const Router = ({page}) => (
    <Switch>
        <Route
            exact path="/home"
            render={(routeProps) => (
            <MainContainer {...routeProps} />
            )}
        />
        <Route
            exact path="/web"
            render={(routeProps) => (
            <WebDesign {...routeProps}  />
            )}
        />
        <Route
             path="/music"
            render={(routeProps) => (
                    <Music {...routeProps} page={page}/>
            )}
        />
    </Switch>
)

export default Router;