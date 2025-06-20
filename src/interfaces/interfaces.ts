export interface DotsProps {
	countDots: number;
	activeDot: number;
	events: Event[];
	setActiveDot: (index: number) => void;
}

export interface NavigatorProps {
	countDots: number;
	activeDot: number;
	goToPreviousDot: (index: number) => void;
	goToNextDot: (index: number) => void;
}

export interface EventsProps {
	activeDot: number;
	events: Event[];
	pushEventsToState: (events: Event[]) => void;
}

// Store типизация

export interface EventItem {
	year: number;
	description: string;
}

export interface Event {
	index: number;
	category: string;
	startYear: number;
	endYear: number;
	events: EventItem[];
}

export interface AppState {
	countDots: number;
	activeDot: number;
	events: Event[];
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

export interface PushEvents {
	type: "PUSH_EVENTS";
	payload: Event[];
}

export type AppAction =
	| SetActiveDotAction
	| GoToNextDot
	| GoToPreviousDot
	| PushEvents;
