import React, { useState } from 'react';
import Page from './page';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findResults from '../../redux/actions/findResults';


const SearchBar = (props) => {
	// set Search Text
	const [txtSearch, setTxtSearch] = useState("");

	/**
	* handle Key Down
	*/
	const handleKeyDown = (e) => {
		// validate Enter Key
		if (e.keyCode == 13) {
			// set State Text Search
			setTxtSearch(e.target.value);
			// call Method Action
			props.findResults(e.target.value);
			// call Result Root
			props.history.push('/items');
		}
	}

	return (
		<Page handleKeyDown = { handleKeyDown }	/>
	);
}

const mapDispatchToProps = {
	findResults
};

export default withRouter(
	connect(null, mapDispatchToProps)(SearchBar)
);