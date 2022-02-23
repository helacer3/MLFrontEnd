const RestRequest  = require("./utils/restRequest");
const FinderHelper = require("./helpers/finderHelper");

module.exports = function() {

	// instance Rest Request
	var restRequest  = new RestRequest();
	// instance Finder Helper
	var finderHelper = new FinderHelper();

	/**
	* api Items Search
	*/
	async function apiItemsSearch(wrdSearch) {
		// set Default Object Response
		let objResponse  = { 'status': "ERROR", 'data': {} };
		// request Find Product
		await restRequest.requestFindProducts(wrdSearch)
			.then((apiResult) => {
				// validate Response	
				if(apiResult.status == "OK") {
					// validate Result Data
					if (apiResult.data != null) {
						// format Response
						let objResult = finderHelper.formatResponseProducts(apiResult.data);
						// set Object Response
						objResponse   = {'status': "OK", 'data': objResult };
					} else {
						// set Object Response
						objResponse   = {'status': "OK", 'data': {} };
					}
				}
			}).catch((error) => {
				// console.error("error: ", error);
		  	});
	  	// default Return
	  	return objResponse;
	}

	/**
	* api Items Search By ID
	*/
	async function apiItemsSearchByID(itemID) {
		// set Default Var
		let descItem     = "";
		let catPath      = {};
		let objResponse  = { 'status': "ERROR", 'data': null };

		/**
			* TODO - Se carga toda la info del producto una vez,
			luego se guarde en una cache como Redis o similar y 
			estara ya completa y lista para su uso en el front
		*/

		// request Find Description By Product ID
		await restRequest.requestFindProductDescription(itemID)
			.then(async function(apiDescResult) {
				// validate Response	
				if(apiDescResult.status == "OK" && apiDescResult.data != null) {
					descItem = apiDescResult.data.plain_text
				}					
				// request Find Product
				await restRequest.requestFindProductByID(itemID)
					.then(async function(apiResult) {
						// validate Response
						if(apiResult.status == "OK" && apiResult.data != null) {
							// request Find Category Path
							await restRequest.requestFindCategoryPath(apiResult.data.category_id)
								.then(async function(apiCategory) {
									// validate Response	
									if(apiCategory.status == "OK" && apiCategory.data != null) {
										catPath = apiCategory.data.path_from_root;
									}								
									// format Response
									let objResult = finderHelper.formatResponseProductByID (
										apiResult.data, descItem, catPath
									);
									// set Object Response
									objResponse = { 'status': "OK", 'data': objResult };
								}).catch((error) => {
									// console.error("error: ", error);
							  	});
					  	}
				  	}).catch((error) => {
						// console.error("error: ", error);
				  	});
			}).catch((error) => {
				// console.error("error: ", error);
		  	});
	  	// default Return
	  	return objResponse;
	}

	/**
	* api Item Description
	*/
	async function apiItemDescription(itemID) {
		// set Default Object Response
		let objResponse = { 'status': "ERROR", 'data': null };
		// request Find Product
		await RestRequest.requestFindProductDescription(itemID)
			.then((apiResult) => {
				// validate Response	
				if(apiResult.status == "OK" && apiResult.data != null) {
					// set Object Response
					objResponse = { 'status': "OK", 'data': apiResult };
				}
			}).catch((error) => {
				// console.error("error: ", error);
		  	});
	  	// default Return
	  	return objResponse;
	}

	// return Methods
	return {
		apiItemsSearch, apiItemsSearchByID, apiItemDescription
	}
}