import React from "react";

export default React.createClass({
	render: function (){
		return(
			<div className="register">
			<form>
				<p id="header"> Register </p>
					<label htmlFor="username"> {this.props.username}</label>
					<br/>
					<input id="username" type="text" />
					<br/>
					<label htmlFor="password"> password</label>
					<br/>
					<input id="password" type="text" {this.props.password} />
					<br/>
					<label htmlFor="confirm"> confirm password</label>
					<br/>
					<input id="confirm" type="text" {this.props.password} />
					<br/>
					<button className="register"> Register </button>
			</form>	
			</div>
		)
	}
})



