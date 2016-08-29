import React from "react";


const FilteredResults = React.createClass ({
	render: function(){
		return (
			<div className="filteredresults">
				<h1> Iron Jobs </h1>
				<br/>
					{this.props.jobs.map(function(jobs){ }}

					<p id="whatwhere"> {this.props.what} {this.props.where}</p>
					<br/>
					<h3 id="salary">Salary</h3>
						<ul id="salaryamount">
							<li> {this.props.salary} {"+"} {this.props.total} </li>
						</ul>	
					<h3 id="location">{Location<}/h3>
					<ul> 
						<li className="location"> {this.props.city} </li>
						<li className="location"> {this.props.state} </li>
					</ul>
			</div>
		)
	}
})

const stateToProps = function(filtered) {
	return {
		filteredResults: state.filteredResults
	}

}
export default connect(stateProps)(FilteredResults)