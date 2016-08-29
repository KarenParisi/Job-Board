import React from 'react';
import {Link} from "react-router";
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, browserHistory, hashHistory } from 'react-router';



export default React.createClass ({
  render:function(){
      return(
        <div className="layout"> Layout
       <Link to="/Forms">Users</Link>
        </div>
      )
  }

})

