import React, { Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom'

const MainContainer = lazy(() => import('./containers/Home/MainContainer'));
const WebDesign = lazy(() => import('./containers/WebDesign'));
const Music = lazy(() => import('./containers/Music'));

// import MainContainer from './containers/Home/MainContainer'
// import WebDesign from './containers/WebDesign';
// import Music from './containers/Music';

const Router = ({page}) => (
    <Suspense fallback = {<div>Loading...</div>}>
        <Switch>
            {/* <Route
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
            /> */}
            <Route
                exact path="/home"
                component={MainContainer}
            />
            <Route
                exact path="/web"
                component={WebDesign}
            />
            <Route
                path="/music"
                component={Music}
            />
        </Switch>
    </Suspense>
)

export default Router;