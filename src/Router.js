import React, { Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./containers/Home/Home'));
const WebDesign = lazy(() => import('./containers/Web/WebDesign'));
const Music = lazy(() => import('./containers/Music/Music'));
const Design = lazy(() => import('./containers/Design/Design'));

const Router = () => (
    <Suspense fallback = {<div>Loading...</div>}>
        <Switch>
            <Route
                exact path="/anujeetchatterjee.design/"
                component={Home}
            />
            <Route
                path="/anujeetchatterjee.design/web"
                component={WebDesign}
            />
            <Route
                path="/anujeetchatterjee.design/music"
                component={Music}
            />
            <Route
                path="/anujeetchatterjee.design/graphics"
                component={Design}
            />
        </Switch>
    </Suspense>
)

export default Router;