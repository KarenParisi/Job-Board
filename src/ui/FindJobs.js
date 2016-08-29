import React from 'react';
import NavBar from 'ui/NavBar';
import SearchBars from "ui/SearchBars";
import SearchResults from "ui/SearchResults";
import FilteredResults from "ui/FilteredResults";


export default React.createClass({
	render: function(){
		return (
			<div className="jobboard">
				<NavBar />
				<SearchBars />
				<FilteredResults />	
				<SearchResults />
			</div>
		)
	}
})