import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

const ProductsResult = (props) => {
	// set Props
	const { results } = props;

	/**
	 * handle Click
	*/
	const handleClick = (itemId, e) => {
		e.preventDefault();
		props.history.push(`/items/${itemId}`);
	}

	return (
		<Page 
			results = {results}
			handleClick = { handleClick }
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		results: state.results.productList
	}
}

// connect: Components - statusText
export default withRouter(
	connect(mapStateToProps)(ProductsResult)
);
// https://www.youtube.com/watch?v=4_I1OydIIuo