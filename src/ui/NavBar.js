import React from 'react';
import {Link} from "react-router";
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, browserHistory, hashHistory } from 'react-router';



export default React.createClass ({
  render:function(){
      return(
        <div className="navbar">
          <ul>
            <Link to="/FindJobs">
            <li className="navbartext"> Find Jobs</li>
            </Link>
            <Link to="/CreateJob">
            <li className="navbartext" id="employers">Employers/Post Jobs</li>
            </Link>
             <Link to="/Forms">
            <li className="navbartext" id="signin">Sign In</li>
            </Link>
        </ul>
        </div>
      )
  }

})

