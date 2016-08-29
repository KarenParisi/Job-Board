import React from 'react';
import NavBar from 'ui/NavBar';
import SearchBars from "ui/SearchBars";
import {Link} from "react-router";

export default React.createClass({
	render: function () {
		return (
			<div className="jobboard">
				<NavBar />
				<SearchBars />
				<div className="orpost">
					<p> OR </p>
					<Link to="CreateJob">
					<button> Post a Job </button>
					</Link>
				</div>
			</div>
		)
	}
})