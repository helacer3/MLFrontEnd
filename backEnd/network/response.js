exports.success = async function(req, res, objMessage, status) {
	let statusCode   = status || 200;
	let rspMessage   = await objMessage || {};
	let jsonResponse = {
		status: status,
		body: rspMessage,
		error: false
	};	
	res.send(jsonResponse);
}

exports.error = function(req, res, message, status) {
	let statusCode = status || 500;
	let rspMessage = message || 'internal Server Error';
	res.status(statusCode).send({
		status: status,
		body: rspMessage,
		error: true
	});
}