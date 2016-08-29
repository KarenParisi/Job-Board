import React from "react";
import {Link}from "react-router";
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

const JobsList = React.createClass ({ //changed from;export default React.createClass ({//
	render: function() {
		return (
			<div className="jobslist">
				<ul>
					{this.props.jobs.map(function(job) { //added all in step 2//
						<li> 
							<h5 className="jobtitle"> {this.props.title} </h5>
							<p className="description"> {this.props.desciption} </p> 
							<p className="time"> {this.props.created_at}  <Link to={`/Job/${job.id}`}> </Link> </p>
					</li>
					<li> 
							<h5 className="jobtitle"> {this.props.title} </h5>
							<p className="description"> {this.props.desciption} </p> 
							<p className="time"> {this.props.created_at}  <Link to={`/Job/${job.id}`}> </Link> </p>
					</li>
					<li> 
							<h5 className="jobtitle"> {this.props.title} </h5>
							<p className="description"> {this.props.desciption} </p> 
							<p className="time"> {this.props.created_at}  <Link to={`/Job/${job.id}`}> </Link> </p>
					</li>
					<li> 
							<h5 className="jobtitle"> {this.props.title} </h5>
							<p className="description"> {this.props.desciption} </p> 
							<p className="time"> {this.props.created_at}  <Link to={`/Job/${job.id}`}> </Link> </p>
					</li>
					<li> 
							<h5 className="jobtitle"> {this.props.title} </h5>
							<p className="description"> {this.props.desciption} </p> 
							<p className="time"> {this.props.created_at}  <Link to={`/Job/${job.id}`}> </Link> </p>
					</li>
					})}
					
				</ul>	
			</div>
		)
	}
})
const stateToProps = function(state){ //added step 2//
	return {
		jobs: state.jobs //will get pased from reducer file//
	}
}
export default connect(stateProps)(JobsList)
