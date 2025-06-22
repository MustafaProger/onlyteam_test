import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TimelineContainer from "./components/TimelineContainer";
import { Event } from "./types/timeline";

const AppContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	min-width: 320px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #f4f5f9;
	overflow-y: auto;
	padding: 0 10px;

	@media (max-width: 768px) {
		padding: 0;
	}
`;

const App = () => {
	const [events, setEvents] = useState<Event[]>([]);

	useEffect(() => {
		fetch("/data/events.json")
			.then((res) => res.json())
			.then(setEvents);
	}, []);

	if (!events.length) return <div>Loading...</div>;

	return (
		<AppContainer className='app'>
			{/* <TimelineContainer 
				events={events.slice(0, 3)} 
			/>
			<TimelineContainer 
				events={events.slice(3, 6)} 
			/> */}
			<TimelineContainer events={events} />
		</AppContainer>
	);
};

export default App;
