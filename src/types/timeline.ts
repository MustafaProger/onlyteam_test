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