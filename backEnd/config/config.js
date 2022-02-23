module.exports = {
	api: {
		port: process.env.API_PORT || 3000,
		qtyItems: 4,
		restBaseUrl: "https://api.mercadolibre.com/",
	},
	endpoints: {
		finderML: "sites/MLA/search",
		finderItemML: "items/",
		finderCategoryML: "categories/"
	},
	signature: {
		name: "Snayder",
		lastName: "Acero"
	}
}