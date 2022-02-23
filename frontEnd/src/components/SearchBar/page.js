import React, { Fragment } from 'react';

import '../../assets/styles/components/SearchBar/SearchBar.scss';
const imgLogo   = window.location.origin + "/public/images/Logo_ML.png";
const imgSearch = window.location.origin + "/public/images/ic_Search.png";

function Page(props) {
	// set Props
	const { handleKeyDown } = props;

	return (
		<Fragment>
			<header className="ml-header">
				<div className="ml-logo">
					<a href="/items">
						<img src={ imgLogo } />
					</a>
				</div>
				<div className="ml-input">
					<input type="text" onKeyDown={ (e) => handleKeyDown(e) } />
					<button type="button">
						<img src={ imgSearch } />
					</button>
				</div>
			</header>
		</Fragment>
	)
}

export default Page;