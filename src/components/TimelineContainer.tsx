import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	top: 0;
	left: 0;

	max-width: 1440px;
	max-height: 1080px;
	min-width: 1440px;
	min-height: 1080px;

	border-left: 1px solid #d9d9d9;
	border-right: 1px solid #d9d9d9;

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 100%;
		height: 1px;
		background-color: #d9d9d9;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateY(-50%);
		width: 1px;
		height: 200%;
		background-color: #d9d9d9;
	}
`;

const TimelineContainer = ({ children }: PropsWithChildren<{}>) => {
	return <Container>{children}</Container>;

};

export default TimelineContainer;
