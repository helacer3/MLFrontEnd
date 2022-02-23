import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findCurrentItem from '../../../redux/actions/findCurrentItem';
import Page from './page';

const ProductDetail = (props) => {
	const { currentItem } = props;
	console.log('currentItem: ', currentItem)
	const [isLoading, setIsLoading] = useState(true);

	/**
	 * use Efect Hook
	*/
	useEffect(() => {
		// validate Loading
		if (isLoading) {
			// call Action by Url or Refresh
			props.findCurrentItem (
				props.match.params.id
			);
			setIsLoading(false);
		}
	});

	return (
		<Page 
			currentItem = { currentItem }
			goTo={(path) => {
				props.history.push(path);
			}} 
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		currentItem: (state.currentItem) ? state.currentItem.detInfo : {}
	}
}

const mapDispatchToProps = {
	findCurrentItem
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
);