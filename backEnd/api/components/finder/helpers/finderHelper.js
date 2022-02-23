const ModelResponse = require("../models/modelResponse");

class FinderHelper {

	/**
	* format Response Products
	*/
	async formatResponseProducts(objRequest) {
		// default Object Response
		let objResponse   = ModelResponse.listItems;
		// array Categories
		let arrCategories = await this.defineResponseCategories(objRequest.filters);
		// validate Object Response
		if (objRequest.results != null) {
			// set Items
			objResponse.items       = objRequest.results;
			// set Path Category
			objResponse.pthCategory = await this.definePrincipalCategoryPath(objRequest.available_filters, arrCategories);
			// set Categories
			objResponse.categories  = await this.defineListCategories(arrCategories); 
		}
		// default Return
		return objResponse;
	}

	/**
	* define Response Categories
	*/
	async defineResponseCategories(reqFilters) {
		// load List Categories
		let lstCategories =  reqFilters.filter(function(item) {
    		return item.id  === "category";
		});
		// default Return
		return (lstCategories.length > 0) ? lstCategories[0].values : [];
	}

	/**
	* define Principal Category
	*/
	async definePrincipalCategoryPath(reqAvalFilters, arrCategories) {
		// default Var
		let catPthRoot = [];
		// validate Length Categories
		if (arrCategories.length == 1) {
			catPthRoot = arrCategories[0].path_from_root;
		}
		// validate Available Filters
		else if (reqAvalFilters.length > 0 && reqAvalFilters.values.length > 0) {
			// principal Category ID
			let prpCategory = reqAvalFilters.values[0].id;
			// iterate Categories
			arrCategories.forEach(category => {
				if (category.id == prpCategory) {
					// return Path Form Root
					return category.path_from_root;
				}
			});
		}
		// default Return
		return catPthRoot;
	}

	/**
	* define List Categories
	*/
	async defineListCategories(arrCategories) {
		// default Array List
		let arrList = [];
		// valdiate Array Categories
		if (arrCategories.length > 0) {
			// iterate Categories
			arrCategories.forEach(category => {
				// add Item To Array List
				arrList.push(category.name);
			});
		}
		// default Return
		return arrList;
	}

	/**
	* format Response Product By ID
	*/
	async formatResponseProductByID(objRequest, itemDescription = "", catPath = {}) {
		// default Object Response
		let objResponse = ModelResponse.singleItem;
		// validate Object Response
		if (objRequest != null) {
			// set Item Values
			objResponse.item.id            = objRequest.id;
			objResponse.item.title         = objRequest.title;
			objResponse.item.price         = objRequest.price;
			objResponse.item.permalink     = objRequest.permalink;
			objResponse.item.picture       = objRequest.pictures[0].url;
			objResponse.item.condition     = objRequest.condition;
			objResponse.item.free_shipping = objRequest.shipping.free_shipping;
			objResponse.item.sold_quantity = objRequest.sold_quantity;
			objResponse.item.description   = itemDescription;
			objResponse.item.catpath       = catPath;
		}
		// default Return
		return objResponse;
	}
}

module.exports = FinderHelper;