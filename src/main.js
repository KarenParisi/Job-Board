import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



// UI
import Home from "ui/Home";
import FindJobs from 'ui/FindJobs';
import CreateJob from "ui/CreateJob";
import Forms from "ui/Forms";
import Job from "ui/Job";



var style = require("layout/style.scss")

const Site = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
    	<Route path="/Home" component={Home} />
        <Route path="/FindJobs" component={FindJobs} />
        <Route path="/Forms" component={Forms} />
        <Route path="/CreateJob" component={CreateJob} />
        <Route path="/Job" component={Job} />

    </Router>
  </MuiThemeProvider>
);

render(Site, document.getElementById('app'));