import React from "react";
import NavBar from "ui/Navbar";

export default React.createClass ({
	render: function (){
		return (
			<div className="jobboard">
			<NavBar />
				<div className="signin">
					<form>
						<p id="header"> Sign In </p>
							<label htmlFor="username"> username </label>
							<br/>
							<input id="username" type="text" {this.props.username} />
							<br/>
							<label htmlFor="password">  </label>
							<br/>
							<input id="password" type="text" {this.props.password} />
							<br/>
							<button> Sign In </button>
					</form>	
				</div>
				<div className="signin">
					<form>
						<p id="header"> Register </p>
							<label htmlFor="username"> username </label>
							<br/>
							<input id="username" type="text" {this.props.username} />
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
			</div>
		)
	}
})