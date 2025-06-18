import { createStore } from "redux";
import { AppState, AppAction } from "../interfaces/interfaces";

const initialStore: AppState = { countDots: 6, activeDot: 6 };

function reducer(store: AppState = initialStore, action: AppAction): AppState {
	switch (action.type) {
		case "SET_ACTIVE_DOT":
			return { ...store, activeDot: action.payload };
		default:
			return store;
	}
}

const store = createStore(reducer);

export default store;
