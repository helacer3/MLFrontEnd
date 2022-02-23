const express    = require("express");
const cors       = require('cors');
const router     = express.Router();
const controller = require("./index");
const response   = require("../../../network/response");


// enable Cors - Allowed All For Dev Tests
router.use(cors());

// define Routes
router.get('/items', apiItems);
router.get('/items/:id', apiItemDetail);
router.get('/items/:id/description', apiItemDescription);

/**
* api Items
* @author Snayder Acero <helacer3@yahoo.es>
*/
function apiItems(req, res) {
	// api Items Search
	controller.apiItemsSearch(req.query.q)
		.then((rspPromise) => {
			// validate Status
			if (rspPromise.status == "OK") {
				response.success(req, res, rspPromise.data, 200);
			} else {
				response.success(req, res, rspPromise.data, 403);				
			} 
		})
		.catch((err) => {
			// console.error("error: ", err);
			response.error(req, res, err, 500);
		});
}

/**
* api Items Detail
* @author Snayder Acero <helacer3@yahoo.es>
*/
function apiItemDetail(req, res) {
	// api Items Search
	controller.apiItemsSearchByID(req.params.id)
		.then((rspPromise) => {
			if (rspPromise.status == "OK") {
				response.success(req, res, rspPromise.data, 200);
			} else {
				response.success(req, res, rspPromise.data, 404);				
			} 
		})
		.catch((err) => {
			// console.error("error: ", err);
			response.error(req, res, err, 500);
		});
}

/**
* api Item Description
* @author Snayder Acero <helacer3@yahoo.es>
*/
function apiItemDescription(req, res) {
	// api Items Search
	controller.apiItemDescriptionByID(req.params.id)
		.then((rspPromise) => {
			if (rspPromise.status == "OK") {
				response.success(req, res, rspPromise.data, 200);
			} else {
				response.success(req, res, rspPromise.data, 403);				
			} 
		})
		.catch((err) => {
			// console.error("error3: ", err);
			response.error(req, res, err, 500);
		});
}

module.exports = router;