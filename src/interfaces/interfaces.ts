export interface DotsProps {
	countDots: number;
	activeDot: number;
	setActiveDot: (index: number) => void;
}

export interface NavigatorProps {
	countDots: number;
	activeDot: number;
	goToPreviousDot: (index: number) => void;
	goToNextDot: (index: number) => void;
}

// Store типизация
export interface AppState {
	countDots: number;
	activeDot: number;
}

export interface SetActiveDotAction {
	type: "SET_ACTIVE_DOT";
	payload: number;
}

export interface GoToNextDot {
	type: "GO_TO_NEXT_DOT";
	payload: number;
}

export interface GoToPreviousDot {
	type: "GO_TO_PREVIOUS_DOT";
	payload: number;
}

export type AppAction = SetActiveDotAction | GoToNextDot | GoToPreviousDot;
