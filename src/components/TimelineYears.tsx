import React from "react";
import styled from "styled-components";
import { AppState } from "../interfaces/interfaces";
import { connect } from "react-redux";

const YearsContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 90px;
`;

const YearsItem = styled.h2`
	font-size: 200px;
	font-weight: bold;

	&.year-item-left {
		color: rgba(93, 95, 239, 1);
	}

	&.year-item-right {
		color: rgba(239, 93, 168, 1);
	}
`;

const TimelineYears = ({
	activeDot,
	events,
}: Pick<AppState, "activeDot" | "events">) => {
	let startYear: number = 0;
	let endYear: number = 0;

	if (events[activeDot - 1]) {
		startYear = events[activeDot - 1].startYear;
		endYear = events[activeDot - 1].endYear;
	}

	console.log(startYear, endYear);

	return (
		<YearsContainer>
			<YearsItem className='year-item-left'>{startYear}</YearsItem>
			<YearsItem className='year-item-right'>{endYear}</YearsItem>
		</YearsContainer>
	);
};

const mapStateToProps = (
	state: AppState
): Pick<AppState, "activeDot" | "events"> => {
	return { activeDot: state.activeDot, events: state.events };
};

export default connect(mapStateToProps)(TimelineYears);
