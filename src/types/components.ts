import { Event } from "./timeline";

// TimelineTitle
export interface TimelineTitleProps {
	title?: React.ReactNode;
}

// TimelineYears
export interface TimelineYearsProps {
	startYear: number;
	endYear: number;
}

// TimelineCircle
export interface TimelineCircleProps {
	countDots: number;
	activeDot: number;
	events: Event[];
	onDotClick: (index: number) => void;
}

// TimelineNavigator
export interface TimelineNavigatorProps {
	countDots: number;
	activeDot: number;
	onPrevious: () => void;
	onNext: () => void;
}

// TimelineEvents
export interface TimelineEventsProps {
	activeDot: number;
	events: Event[];
}

// TimelineContainer
export interface TimelineContainerProps {
	events: Event[];
	title?: React.ReactNode;
} 