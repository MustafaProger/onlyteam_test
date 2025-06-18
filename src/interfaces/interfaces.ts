export interface WorkWithDots {
	countDots: number;
	activeDot: number;
	setActiveDot: (index: number) => void;
}

export interface AppState {
	countDots: number;
	activeDot: number;
}

export interface SetActiveDotAction {
	type: 'SET_ACTIVE_DOT';
	payload: number;
}

export type AppAction = SetActiveDotAction;
