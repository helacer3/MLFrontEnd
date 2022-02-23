const config = require("../../../../config/config");
const axios  = require('axios');

class RestRequest {

	/*
	 * general Request
	*/
	async generalRequest(reqEndpoint, reqParams, defData = null) {
		// default Object Response
		let objResponse = { "status": "ERROR", "data": defData };
		//  get Items From ML API
		await axios.get(config.api.restBaseUrl+reqEndpoint, reqParams )
			.then(function (response) {
				objResponse = { "status": "OK", "data": response.data };
			})
			.catch(function (error) {
				// console.error("error: ", error);
			});
		// console.log("BaseUrl: "+config.api.restBaseUrl+" reqEndpoint: "+reqEndpoint+" reqParams: "+reqParams);
		// console.log("objResponse: ", objResponse);
		// default Return
		return objResponse;
	}

	/**
	* request Find Product
	*/
	async requestFindProducts(wrdSearch = "") {
		// return General Request
		return await this.generalRequest(
			config.endpoints.finderML,
			{
			    params: {
				  q: wrdSearch,
				  limit: config.api.qtyItems
			    }
		    },
		    null
		);
	}

	/**
	* request Find Product By ID
	*/
	async requestFindProductByID(itemID = "") {
		// return General Request
		return await this.generalRequest(
			config.endpoints.finderItemML+itemID,
			{},
		    null
		);
	}

	/**
	* request Find Product Description
	*/
	async requestFindProductDescription(itemID = "") {
		// return General Request
		return await this.generalRequest(
			config.endpoints.finderItemML+'/'+itemID+'/description/',
			{},
		    null
		);
	}

	/**
	* request Find Category Path
	*/
	async requestFindCategoryPath(categoryID = "") {
		// return General Request
		return await this.generalRequest(
			config.endpoints.finderCategoryML+categoryID,
			{},
		    null
		);
	}
}

module.exports = RestRequest;