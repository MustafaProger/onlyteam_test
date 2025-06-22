import React from "react";
import styled from "styled-components";
import TimelineContainer from "./components/TimelineContainer";
import TimelineCircle from "./components/TimelineCircle";
import TimelineNavigator from "./components/TimelineNavigator";
import TimelineTitle from "./components/TimelineTitle";
import TimelineEvents from "./components/TimelineEvents";
import TimelineYears from "./components/TimelineYears";

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	background: #f4f5f9;
	overflow-y: auto;
	padding: 0 10px;
`;

const App = () => {
	return (
		<AppContainer>
			<TimelineContainer>
				<TimelineTitle />
				<TimelineCircle />
				<TimelineYears />
				<TimelineNavigator />
				<TimelineEvents />
			</TimelineContainer>
		</AppContainer>
	);
};

export default App;
