const initialState = {
	detInfo: {}
}

function reducer(state = null, { type, payload }) {
	// switch By Types
	switch (type) {
		case 'findCurrentItemType':
			return Object.assign({}, state, { detInfo: payload });
		default:
			return state;
	}
}

export default reducer;