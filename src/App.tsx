import React from "react";
import styled from "styled-components";
import TimelineContainer from "./components/TimelineContainer";
import TimelineCircle from "./components/TimelineCircle";
import TimelineNavigator from "./components/TimelineNavigator";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 320px;
	background: #f4f5f9;
`;

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

const App = () => {
	return (
		<AppContainer>
			<TimelineContainer>
				<TitleWrapper>
					<Line />
					<Title>
						Исторические
						<br />
						даты
					</Title>
				</TitleWrapper>
				<TimelineCircle />
				<TimelineNavigator />
			</TimelineContainer>
		</AppContainer>
	);
};

export default App;
