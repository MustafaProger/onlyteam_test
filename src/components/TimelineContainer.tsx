import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TimelineTitle from "./TimelineTitle";
import TimelineCircle from "./TimelineCircle";
import TimelineYears from "./TimelineYears";
import TimelineNavigator from "./TimelineNavigator";
import TimelineEvents from "./TimelineEvents";
import { Event } from "../types/timeline";
import { TimelineContainerProps } from "../types/components";

const Container = styled.div`
	position: relative;
	top: 0%;
	left: 0%;
	max-width: 1440px;
	min-height: 1080px;
	width: 100%;
	height: 100%;
	border-left: 1px solid #d9d9d9;
	border-right: 1px solid #d9d9d9;

	&::before {
		content: "";
		position: absolute;
		top: 45%;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #d9d9d9;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		width: 1px;
		height: 100%;
		background-color: #d9d9d9;
	}

	@media (max-width: 1440px) {
		min-height: 700px;
	}

	@media (max-width: 1024px) {
		&::before {
			top: 40%;
		}
	}

	@media (max-width: 768px) {
		min-height: 500px;
		border: none;
		padding: 20px;

		&::after,
		&::before {
			display: none;
		}
	}
`;

const TimelineContainer: React.FC<TimelineContainerProps> = ({ events }) => {
	const [activeDot, setActiveDot] = useState(1);
	const countDots = events.length;

	const currentEvent = events[activeDot - 1];
	const startYear = currentEvent?.startYear ?? 0;
	const endYear = currentEvent?.endYear ?? 0;

	const handlePrevious = () => {
		setActiveDot((prev) => (prev > 1 ? prev - 1 : countDots));
	};

	const handleNext = () => {
		setActiveDot((prev) => (prev < countDots ? prev + 1 : 1));
	};

	const handleDotClick = (index: number) => {
		setActiveDot(index);
	};

	return (
		<Container className='container'>
			<TimelineTitle />
			<TimelineCircle
				countDots={countDots}
				activeDot={activeDot}
				events={events}
				onDotClick={handleDotClick}
			/>
			<TimelineYears
				startYear={startYear}
				endYear={endYear}
			/>
			<TimelineNavigator
				countDots={countDots}
				activeDot={activeDot}
				onPrevious={handlePrevious}
				onNext={handleNext}
			/>
			<TimelineEvents
				activeDot={activeDot}
				events={events}
			/>
		</Container>
	);
};

export default TimelineContainer;
