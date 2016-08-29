import React from "react";
import NavBar from "ui/NavBar";

const JobPost =  React.createClass({
	render: function (){
		return (
			<div className="jobboard">
			<NavBar />
				<div className="createjob">
				{this.props.map(function(post) { 
					<form>
						<p id="header"> Create a Job Posting </p>
							<label htmlFor="title"> title </label>
							<br/>
							<input id="title" type="text" {this.props.title} />
							<br/>
							<label htmlFor="description">  </label>
							<br/>
							<input id="description" type="text" {this.props.description} />
							<br/>
							<label htmlFor="location"> </label>
							<br/>
							<input id="location" type="text" {this.props.location.city} {this.props.location.state} />
							<br/>
							<label htmlFor="salary"> salary range </label>
							<br/>
							<input id="from" type="text" {this.props.minSalary} /> to 
							<input id="to" type="text" {this.props.maxSalary} /> 
							<br/>
							// <button> Create Job </button> //Link to???//
					</form>
				})}
			</div>
		</div>
		)
	}
})	
const stateToProps = function(state) {
	return {
		jobpost: state.JobPost
	}
}
export default connect(stateProps)(JobsList)




