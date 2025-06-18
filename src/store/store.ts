import { createStore } from "redux";

const initialStore = { countDots: 6, activeDot: 5 };

function reducer(store = initialStore, action: any) {
	switch (action.type) {
		case "SET_ACTIVE_DOT":
			return { ...store, activeDot: action.payload };
		default:
			return store;
	}
}

const store = createStore(reducer);

export default store;
