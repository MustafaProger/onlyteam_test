import React from "react";
import styled from "styled-components";
import TimelineContainer from "./components/TimelineContainer";
import TimelineCircle from "./components/TimelineCircle";
import TimelineNavigator from "./components/TimelineNavigator";
import TimelineTitle from "./components/TimelineTitle";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 320px;
	background: #f4f5f9;
`;

const App = () => {
	return (
		<AppContainer>
			<TimelineContainer>
				<TimelineTitle />
				<TimelineCircle />
				<TimelineNavigator />
			</TimelineContainer>
		</AppContainer>
	);
};

export default App;
