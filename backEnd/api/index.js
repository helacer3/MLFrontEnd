const express    = require("express");
const bodyParser = require("body-parser");
const config     = require("../config/config.js");

const finder     = require("./components/finder/network");

const app = express();

app.use(bodyParser.json());

// Router
app.use('/api', finder);

app.listen(config.api.port, () => {
	console.log('API escuchando en el puerto ', config.api.port);
});
