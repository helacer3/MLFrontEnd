const config = require("../config/config");
const axios  = require('axios');

class RestRequest {

	/**
	* request Products By Term
	*/
	requestProductsByTerm(strType = "", wrdSearch = "") {
		// default Var
		let datItems = {};
		// return API Response		
		return (dispatch, getState) => {
			axios.get(
				config.api.restBaseUrl + config.endpoints.apiItems,
				{ 
					params: {
						q: wrdSearch
					}
				}
			)
			.then((response) => {
				if (response.data.body.items.length > 0) { 
					// set Response Service
					datItems = response.data.body;
				}
				// dispatch Response
				dispatch( { type: strType, payload: datItems } )
			})
			.catch(function (error) {
				// console.error("error requestProductsByTerm: ", error);
			});
		}
	}

	/**
	* request Detail Product
	*/
	requestDetailProduct(strType = "", itemId = '') {
		// default Var
		let datItem = {};
		// retur API Response		
		return (dispatch, getState) => {
			axios.get(
				config.api.restBaseUrl + config.endpoints.apiItems+'/'+itemId,
			)
			.then((response) => {
				if (response.data.body.item.id != "") { 
					// set Response Service
					datItem = response.data.body;
				}
				// dispatch Response
				dispatch( { type: strType, payload: datItem } )
			})
			.catch(function (error) {
				// console.error("error requestDetailProduct: ", error);
			});
		}
	}
}

export default RestRequest;