import React from "react";

export default React.createClass({
	render: function (){
		return(
			<div className="signin">
			<form>
				<p id="header"> Sign In </p>
					<label htmlFor="username"> username </label>
					<br/>
					
					<input id="username" type="text" {this.props.username} />
					<br/>

					<label htmlFor="password"> password </label>
					<br/>
					<input id="password" type="text" {this.props.password} />
					<br/>
					<button className="signin"> Sign In </button>
			</form>	
			</div>
		)
	}
})



