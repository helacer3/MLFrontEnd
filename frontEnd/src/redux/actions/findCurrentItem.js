import RestRequest from '../../utils/restRequest';
import { typeCurrentItem } from '../../utils/constants'

const findCurrentItem = itemId => {
	// instance Rest Request
	let restRequest = new RestRequest();
	// request Products By Term
	return restRequest.requestDetailProduct(typeCurrentItem, itemId);

}
export default findCurrentItem;