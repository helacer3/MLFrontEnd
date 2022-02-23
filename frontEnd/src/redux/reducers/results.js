const initialState = {
	productList: {}
}

function reducer(state = [], { type, payload }) {
	// switch By Types
	switch (type) {
		case 'findResultsType':
			return Object.assign({}, state, { productList: payload });
		default:
			return state;
	}
}

export default reducer;