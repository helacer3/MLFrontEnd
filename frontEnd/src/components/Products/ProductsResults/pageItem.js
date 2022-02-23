import React from 'react';
import NumberFormat from 'react-number-format';

import { numberFormatProps } from '../../../utils/constants'
import '../../../assets/styles/components/Products/ProductsResults.scss';

// local Images
const imgShipping = window.location.origin + "/public/images/ic_shipping.png";

function PageItem(props) {
	// set Props
	const { handleClick, item } = props;
	return (
        <div className="ml-result" key={item.id} >
            <section className="ml-results-section" onClick={ (e) => handleClick(item.id, e) }>
                <ul className="ml-list-products">
                    <li className="ml-list-products-item">
                        <div className="ml-product-image">
                            <img src={item.thumbnail} />
                        </div>
                        <div className="ml-product-data">
                            <div className="ml-dataprice">
                                <NumberFormat {
                                    ...numberFormatProps
                                } value={item.price} />
                                { item.shipping.free_shipping ?
                                    <img src={ imgShipping } />
                                : "" }
                            </div>
                            <div className="ml-dataname">
                                {item.title}
                            </div>
                        </div>
                        <div className="ml-product-location">
                            {item.address.state_name}
                        </div>
                    </li>
                </ul>
            </section>
            <div className="separator">
                <hr />
            </div>
        </div>
	)
}

export default PageItem;