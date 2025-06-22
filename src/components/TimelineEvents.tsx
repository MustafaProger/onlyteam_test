import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { TimelineEventsProps } from "../types/components";
import { EventItem } from "../types/timeline";

const EventsContainer = styled.div`
	margin: 0px 80px;
	position: relative;

	@media (max-width: 768px) {
		margin: 205px 0 0 0;

		&::before {
			content: "";
			position: absolute;
			top: -20px;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: #d9d9d9;
		}
	}
	@media (max-width: 425px) {
		.swiper-pagination-bullet {
			width: 6px;
			height: 6px;
		}
	}
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
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const EventDescr = styled.p`
	line-height: 30px;
	font-size: 20px;
	color: rgba(66, 86, 122, 1);

	@media (max-width: 425px) {
		font-size: 14px;
		line-height: 145%;
	}
`;

const FadeWrapper = styled.div<{ $visible: boolean }>`
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	transform: translateY(${({ $visible }) => ($visible ? "0" : "5px")});
	transition: all 0.4s ease;
`;

const TimelineEvents = ({ activeDot, events }: TimelineEventsProps) => {
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

	const currentEvent = events[localDot - 1];
	const eventVerstka = currentEvent
		? currentEvent.events.map((event: EventItem, index: number) => (
				<SwiperSlide key={index}>
					<EventContainer>
						<EventYear>{event.year}</EventYear>
						<EventDescr>{event.description}</EventDescr>
					</EventContainer>
				</SwiperSlide>
		  ))
		: [];

	return (
		<EventsContainer className='events__container'>
			<FadeWrapper $visible={visible}>
				<div
					className='custom-swiper-wrapper'
					style={{ position: "relative" }}>
					<div className='custom-swiper-prev'></div>

					<Swiper
						pagination={{ clickable: true }}
						slidesPerView={3.5}
						spaceBetween={80}
						navigation={{
							prevEl: ".custom-swiper-prev",
							nextEl: ".custom-swiper-next",
						}}
						breakpoints={{
							1440: {
								slidesPerView: 3.5,
								spaceBetween: 80,
								navigation: {
									prevEl: ".custom-swiper-prev",
									nextEl: ".custom-swiper-next",
								},
								pagination: {
									clickable: false,
								},
							},
							1040: {
								slidesPerView: 2.5,
								spaceBetween: 50,
								navigation: {
									prevEl: ".custom-swiper-prev",
									nextEl: ".custom-swiper-next",
								},
								pagination: {
									clickable: false,
								},
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 25,
								navigation: {
									prevEl: ".custom-swiper-prev",
									nextEl: ".custom-swiper-next",
								},
								pagination: {
									clickable: false,
								},
							},
							320: {
								slidesPerView: 1.5,
								spaceBetween: 25,
								navigation: false,
								pagination: {
									clickable: true,
								},
							},
							0: {
								slidesPerView: 1,
								spaceBetween: 0,
								navigation: false,
								pagination: {
									clickable: true,
								},
							},
						}}
						modules={[Navigation, Pagination]}
						className='mySwiper'>
						{eventVerstka}
					</Swiper>

					<div className='custom-swiper-next'></div>
				</div>
			</FadeWrapper>
		</EventsContainer>
	);
};

export default TimelineEvents;
