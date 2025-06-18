import { createStore } from "redux";
import { AppState, AppAction } from "../interfaces/interfaces";

const initialStore: AppState = { countDots: 6, activeDot: 6 };

function reducer(store: AppState = initialStore, action: AppAction): AppState {
	switch (action.type) {
		case "SET_ACTIVE_DOT":
			return { ...store, activeDot: action.payload };
		case "GO_TO_PREVIOUS_DOT":
			return {
				...store,
				activeDot: store.activeDot > 1 ? store.activeDot - 1 : store.countDots,
			};
		case "GO_TO_NEXT_DOT":
			return {
				...store,
				activeDot: store.activeDot < store.countDots ? store.activeDot + 1 : 1,
			};
		default:
			return store;
	}
}

const store = createStore(reducer);

export default store;
