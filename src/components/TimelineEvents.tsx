import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import {
	AppAction,
	AppState,
	EventItem,
	EventsProps,
} from "../interfaces/interfaces";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const EventsContainer = styled.div`
	margin: 56px 80px 40px 80px;
`;

const EventContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const EventYear = styled.h4`
	line-height: 120%;
	font-size: 25px;
	color: rgba(56, 119, 238, 1);
`;

const EventDescr = styled.p`
	line-height: 30px;
	font-size: 20px;
	color: rgba(66, 86, 122, 1);
`;

const FadeWrapper = styled.div<{ $visible: boolean }>`
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	transform: translateY(${({ $visible }) => ($visible ? "0" : "5px")});
	transition: all 0.4s ease;
`;

const TimelineEvents = ({
	activeDot,
	events,
	pushEventsToState,
}: EventsProps) => {
	const [visible, setVisible] = useState(true);
	const [localDot, setLocalDot] = useState(activeDot);

	useEffect(() => {
		setVisible(false);

		const timer = setTimeout(() => {
			setLocalDot(activeDot);
			setVisible(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, [activeDot]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("/data/events.json");
				if (!response.ok)
					throw new Error(`HTTP error! status: ${response.status}`);
				const data = await response.json();
				pushEventsToState(data);
			} catch (error) {
				console.error("Ошибка загрузки данных:", error);
			}
		}
		fetchData();
	}, [pushEventsToState]);

	const currentEvent = events[localDot - 1];
	let eventVerstka: JSX.Element[] = [];

	if (currentEvent) {
		eventVerstka = currentEvent.events.map(
			(event: EventItem, index: number) => (
				<SwiperSlide key={index}>
					<EventContainer>
						<EventYear>{event.year}</EventYear>
						<EventDescr>{event.description}</EventDescr>
					</EventContainer>
				</SwiperSlide>
			)
		);
	}

	return (
		<EventsContainer className='events__container'>
			<FadeWrapper $visible={visible}>
				<div
					className='custom-swiper-wrapper'
					style={{ position: "relative" }}>
					<div className='custom-swiper-prev'></div>

					<Swiper
						slidesPerView={3.5}
						spaceBetween={80}
						navigation={{
							prevEl: ".custom-swiper-prev",
							nextEl: ".custom-swiper-next",
						}}
						breakpoints={{
							1440: {
								slidesPerView: 3.5,
							},
							1040: {
								slidesPerView: 2.5,
								spaceBetween: 50,
							},
							640: {
								slidesPerView: 2,
							},
							420: {
								slidesPerView: 1.5,
							},
						}}
						modules={[Navigation]}
						className='mySwiper'>
						{eventVerstka}
					</Swiper>
					<div className='custom-swiper-next'></div>
				</div>
			</FadeWrapper>
		</EventsContainer>
	);
};

const mapStateToProps = (
	state: AppState
): Pick<EventsProps, "activeDot" | "events"> => ({
	activeDot: state.activeDot,
	events: state.events,
});

const mapDispatchToProps = (
	dispatch: Dispatch<AppAction>
): Pick<EventsProps, "pushEventsToState"> => ({
	pushEventsToState: (events) =>
		dispatch({ type: "PUSH_EVENTS", payload: events }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineEvents);
