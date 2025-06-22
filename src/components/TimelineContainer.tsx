import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	top: 0%;
	left: 0%;
	max-width: 1440px;
	min-height: 1080px;
	width: 100%;
	height: 100%;
	border-left: 1px solid #d9d9d9;
	border-right: 1px solid #d9d9d9;

	&::before {
		content: "";
		position: absolute;
		top: 45%;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #d9d9d9;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		width: 1px;
		height: 100%;
		background-color: #d9d9d9;
	}

	@media (max-width: 1440px) {
		min-height: 700px;
	}

	@media (max-width: 1024px) {
		&::before {
			top: 40%;
		}
	}

	@media (max-width: 768px) {
		border: none;
		padding: 20px;
		
		&::after,
		&::before {
			display: none;
		}
	}
`;

const TimelineContainer = ({ children }: PropsWithChildren<{}>) => {
	return <Container className='container'>{children}</Container>;
};

export default TimelineContainer;
