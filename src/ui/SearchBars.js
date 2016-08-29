import React from "react";
import {Link} from "react-router";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange500} from 'material-ui/styles/colors';

const styles = {
  floatingLabelStyle: {
    color: deepOrange500,
  }
};

export default React.createClass ({
	render: function(){
		return (
			<div className="search">
				 <TextField hintText="Developer" floatingLabelText="what" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelFixed={true} /> <TextField floatingLabelText="where" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelFixed={true} hintText="Las Vegas, NV"  /> <button id="button"> find jobs </button>
				 <div className="searchtext"> 
				 	<p id="what"> job title or keywords </p> 
				 	<p id="where"> city, state or zip </p> 
				 </div>

				 
			</div>
		)
	}
})