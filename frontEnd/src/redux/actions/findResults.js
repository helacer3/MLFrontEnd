import RestRequest from '../../utils/restRequest'
import { typeResults } from '../../utils/constants'

const findResults = txtSearch => {
	// instance Rest Request
	let restRequest = new RestRequest();
	// request Products By Term
	return restRequest.requestProductsByTerm(typeResults, txtSearch);

}

export default findResults;