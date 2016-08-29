import React from "react";
import NavBar from "ui/NavBar";
import SearchBars from "ui/SearchBars";

export default React.createClass ({
	render:function (){
		return (
			<div className="jobboard"> 
			<NavBar />
			<SearchBars />
			 <div className="jobdetail">
				<p id="header"> <h3> {this.props.title} </h3></p>
					<p className="detail"> {this.props.description} </p>
					
				<button className="apply"> Apply </button>
				</div>
			</div>
	
		)
	}
})