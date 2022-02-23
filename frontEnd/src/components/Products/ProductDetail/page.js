import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';
import NumberFormat from 'react-number-format';

import SearchBar from '../../SearchBar';
import { numberFormatProps } from '../../../utils/constants'
import '../../../assets/styles/components/Products/ProductDetail.scss';

function Page(props) {
	// set Props
	const {	goTo, currentItem } = props;

	return (
		<Fragment>
			<Helmet>
			    <title>Mercadolibre { ( currentItem && currentItem.item) ? currentItem.item.title: '' }</title>
			    <meta name="description" content="{ ( currentItem && currentItem.item) ? currentItem.item.title: '' }" />
		    </Helmet>
			<SearchBar />
			{/* show Results */}
			<div className="ml-content">
				{
					currentItem && currentItem.item ?
						<div>
							<div className="ml-breadcrumb">
								<ul className="breadcrumb">
									{	
										currentItem.item.catpath.reverse().map((bc, id) => (
											<li key={+new Date() + Math.random()}>{ bc.name }</li>
										))
									}
								</ul>
							</div>
							<section className="ml-product">
								<div className="ml-product-data">
									<div className="ml-product-data-image">
										<img src={currentItem.item.picture} />
									</div>
									<div className="ml-product-data-info">
										<div className="ml-product-count">										
											{ currentItem.condition == "new" ? "Nuevo" : "Usado" } - {currentItem.sold_quantity} vendidos
										</div>
										<div className="ml-product-title">{ currentItem.item.title }</div>
										<div className="ml-product-price">
											<NumberFormat {
												...numberFormatProps
											} suffix={'ºº'} value={currentItem.item.price} />
										</div>
										<div className="ml-product-button">
											<a href={ currentItem.permalink } target="_blank">Comprar</a>
										</div>
									</div>
								</div>
								<div className="ml-product-description">
									<div className="ml-product-description-title">
										{currentItem.item.title}
									</div>
									<p>{currentItem.item.description}</p>
								</div>
							</section>
						</div>
					:
					<div className="loadingMessage">
						... Cargando Información ...
					</div>
				}
			</div>
		</Fragment>
	)
}

export default Page;