import { createStore } from "redux";

const initialStore = { countDots: 6 };

function reducer(store = initialStore, action: any) {
	switch (action.type) {
		default:
			return store;
	}
}

const store = createStore(reducer);

export default store;
