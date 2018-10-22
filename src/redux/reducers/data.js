import { LOAD_POST } from '../action-types/index';

const initialState = {
	posts: [],
	nposts: [1,2,3,4,5,6]
}

function data(state = initialState, action){
	switch (action.type) {
		case LOAD_POST: {
			state.posts = [...state.posts , action.payload];
			return {
			  ...state
			} 
			break;
		}
		default:
			return state;
			break;
	}
}

export default data;