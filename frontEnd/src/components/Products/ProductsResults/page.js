import React, { Fragment } from 'react';

import PageItem from './pageItem';
import SearchBar from '../../SearchBar';
import '../../../assets/styles/components/Products/ProductsResults.scss';

// local Images
const imgShipping = window.location.origin + "/public/images/ic_shipping.png";

function Page(props) {
	// set Props
	const { results, handleClick } = props;
	// set Has Results
	const hasResults = (results) ? results.items.length > 0 : false;
	
	return (
		<Fragment>
			<SearchBar />
			{/* show Results */}
			<div className="ml-content">
				{ hasResults ?
				<div>
					<div className="ml-breadcrumb">
						<ul className="breadcrumb">
							{	
								results.pthCategory.reverse().map((bc, id) => (
									<li key={+new Date() + Math.random()}>{ bc.name }</li>
								))
							}
						</ul>
					</div>
					<div className="ml-results">
						{ results.items.map((item) => (
							<PageItem item={item} handleClick={handleClick} />
						))}
					</div>
				</div>
				:
				<div className="errorMessage">
					No encontramos el producto solicitado
				</div>
			}
			</div>
		</Fragment>
	)
}

export default Page;