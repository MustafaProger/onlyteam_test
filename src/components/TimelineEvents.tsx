import React, { useEffect } from "react";
import {
	AppAction,
	AppState,
	EventItem,
	EventsProps,
} from "../interfaces/interfaces";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";

const EventsContainer = styled.div`
	display: flex;
	margin: 56px 0 0 80px;
	gap: 80px;
	overflow: hidden;
	max-width: 1200px;
`;

const EventContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 135px;
	min-width: 320px;
	gap: 15px;
`;

const EventYear = styled.h2`
	line-height: 120%;
	font-size: 25px;
	color: rgba(56, 119, 238, 1);
`;

const EventDescr = styled.h3`
	max-height: 90px;
	line-height: 30px;
	font-size: 20px;
	color: rgba(66, 86, 122, 1);
`;

const TimelineEvents = ({
	activeDot,
	events,
	pushEventsToState,
}: EventsProps) => {
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("/data/events.json");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				pushEventsToState(data);
			} catch (error) {
				console.error("Ошибка загрузки данных:", error);
			}
		}

		fetchData();
	}, [pushEventsToState]);

	const isEvents = events[activeDot - 1];

	let eventVerstka: JSX.Element[] | null = null;

	const currentEvent = events[activeDot - 1];

	if (currentEvent) {
		eventVerstka = currentEvent.events.map(
			(event: EventItem, index: number) => (
				<EventContainer key={index}>
					<EventYear>{event.year}</EventYear>
					<EventDescr>{event.description}</EventDescr>
				</EventContainer>
			)
		);
	}

	return <EventsContainer>{eventVerstka}</EventsContainer>;
};

const mapStateToProps = (
	state: AppState
): Pick<EventsProps, "activeDot" | "events"> => {
	return { activeDot: state.activeDot, events: state.events };
};

const mapDispatchToProps = (
	dispatch: Dispatch<AppAction>
): Pick<EventsProps, "pushEventsToState"> => {
	return {
		pushEventsToState: (events) =>
			dispatch({ type: "PUSH_EVENTS", payload: events }),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TimelineEvents);
