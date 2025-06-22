import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppState } from "../interfaces/interfaces";
import { connect } from "react-redux";

const YearsContainer = styled.div`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 90px;

	@media (max-width: 1024px) {
		top: 40%;
	}

	@media (max-width: 768px) {
		width: calc(100% - 40px);
	}
`;

const YearsItem = styled.h2`
	font-size: 200px;
	font-weight: bold;
	transition: all 0.3s ease;

	&.years__item-left {
		color: rgba(93, 95, 239, 1);
	}

	&.years__item-right {
		color: rgba(239, 93, 168, 1);
	}

	@media (max-width: 1440px) {
		font-size: 140px;
	}

	@media (max-width: 1024px) {
		font-size: 119px;
	}
`;

const TimelineYears = ({
	activeDot,
	events,
}: Pick<AppState, "activeDot" | "events">) => {
	const startYear = events[activeDot - 1]?.startYear ?? 0;
	const endYear = events[activeDot - 1]?.endYear ?? 0;

	const [displayStartYear, setDisplayStartYear] = useState(startYear);
	const [displayEndYear, setDisplayEndYear] = useState(endYear);

	const animateValue = (
		from: number,
		to: number,
		setFn: React.Dispatch<React.SetStateAction<number>>
	) => {
		let current = from;
		const step = (to - from) / 10;

		const run = () => {
			current += step;
			if (Math.abs(current - to) < 1) {
				setFn(to);
				return;
			}
			setFn(Math.round(current));
			setTimeout(run, 30);
		};

		run();
	};

	useEffect(() => {
		animateValue(displayStartYear, startYear, setDisplayStartYear);
	}, [startYear]);

	useEffect(() => {
		animateValue(displayEndYear, endYear, setDisplayEndYear);
	}, [endYear]);

	return (
		<YearsContainer className='years__container'>
			<YearsItem className='years__item years__item-left'>
				{displayStartYear}
			</YearsItem>
			<YearsItem className='years__item years__item-right'>
				{displayEndYear}
			</YearsItem>
		</YearsContainer>
	);
};

const mapStateToProps = (
	state: AppState
): Pick<AppState, "activeDot" | "events"> => ({
	activeDot: state.activeDot,
	events: state.events,
});

export default connect(mapStateToProps)(TimelineYears);
