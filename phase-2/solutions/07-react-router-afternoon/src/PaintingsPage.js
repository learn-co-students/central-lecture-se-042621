import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaintingsList from './PaintingsList';
import PaintingShow from './PaintingShow';

const PaintingsPage = ({ match, paintings }) => (
  <div>
    <Switch>
        {/* Adding code to pass the paintings to the `PaintingShow` component */}
        {/* "match.url" matches the url passed via "routerProps" in App.js, "/paintings" */}
        {/* ":paintingId" represents the param that we wish to pass to PaintingShow
            via "routerProps" below and changes based upon the id of whatever Painting
            we've chosen to view */}
        <Route 
            path={`${match.url}/:paintingId`} 
            render={routerProps => <PaintingShow {...routerProps} paintings={paintings} />} 
        />

        {/* When the URL path is simply "/paintings", we render all paintings via
            PaintingsList */}
        <Route path="/paintings">
            <PaintingsList paintings={paintings} />
        </Route>
    </Switch>
  </div>
)

export default PaintingsPage; 