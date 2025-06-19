import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	padding-top: 170px;
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
		<TitleWrapper>
			<Line />
			<Title>
				Исторические
				<br />
				даты
			</Title>
		</TitleWrapper>
	);
};

export default TimelineTitle;
