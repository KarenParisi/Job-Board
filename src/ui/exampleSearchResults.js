import React from "react";
import {Link}from "react-router";
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import {connect} from 'react-redux';

const JobsList = React.createClass ({
	render: function() {
		return (
			<div className="jobslist">
				<ul>
					{this.props.jobs.map(function(job){
						<li> 
							<h5 className="jobtitle"> {job.jobtitle} </h5>
							<p className="description"> {job.description} </p> 
							<p className="time"> {job.time}  <Link to={`/Job/${job.id}`}> View Job </Link> </p>
						</li>
					})}
				</ul>	
			</div>
		)
	}
})

const stateToProps = function(state) {
	return {
		jobs: state.jobs //passed from Reducer//
	}
}


export default connect(stateProps)(JobsList)