import { createStore } from 'redux';


const initialState = {
	data: "ola mi perro"
}

const store = createStore(
	(state) => state,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;