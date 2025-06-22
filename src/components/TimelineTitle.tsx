import React from "react";
import styled from "styled-components";

const TitleContaner = styled.div`
	display: flex;
	align-items: center;
	padding-top: 170px;

	@media (max-width: 1440px) {
		padding-top: 39px;

		.title__item {
			font-size: 42px;
		}

		.title__line {
			margin-right: 60px;
		}
	}

	@media (max-width: 1024px) {
		.title__line {
			height: 100px;
			margin-right: 50px;
		}
	}

	@media (max-width: 768px) {
		border: none;

		.title__item {
			font-size: 36px;
		}

		.title__line {
			display: none;
		}
	}

	@media (max-width: 425px) {
		.title__item {
			font-size: 20px;
		}
	}
`;

const Line = styled.div`
	width: 5px;
	height: 120px;
	margin-right: 78px;
	background: linear-gradient(to bottom, #3877ee, #ef5da8);
`;

const Title = styled.h1`
	font-size: 56px;
	font-weight: bold;
	line-height: 120%;
	color: rgba(66, 86, 122, 1);
	margin: 0;
`;

const TimelineTitle = () => {
	return (
		<TitleContaner className='title__container'>
			<Line className='title__line' />
			<Title className='title__item'>
				Исторические
				<br />
				даты
			</Title>
		</TitleContaner>
	);
};

export default TimelineTitle;
