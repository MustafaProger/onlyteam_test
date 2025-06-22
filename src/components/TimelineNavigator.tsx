import React from "react";
import { AppAction, AppState, NavigatorProps } from "../interfaces/interfaces";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";

const TimelineNavigatorContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
	top: 36.5%;
	left: 0px;
	margin-left: 80px;

	@media (max-width: 1440px) {
		top: 40%;
	}

	@media (max-width: 768px) {
		top: 75%;
		padding-bottom: 13.3px;
		margin-left: 0px;
		gap: 10px;
	}
`;

const NavigatorContainer = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	top: 0;
	left: 0;
	width: 120px;
	height: 50px;

	.navigator {
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		height: 50px;
		background-color: #f4f5f9;
		border: 1px solid rgba(48, 62, 88, 0.5);
		border-radius: 50%;
		background: transparent;
		cursor: pointer;
		transition: all 0.5s;
	}

	.navigator:hover {
		background-color: white;
	}

	.navigator span {
		position: relative;
		display: block;
		width: 10px;
		height: 10px;
		border: 2px solid #42567a;
		border-right: transparent;
		border-bottom: transparent;
	}

	.navigator-right {
		left: 50%;
		transform: translateX(20%);
	}

	.navigator span {
		position: absolute;
		left: 50%;
		top: 50%;
	}

	.navigator-left span {
		transform: translate(-25%, -50%) rotate(-45deg);
	}

	.navigator-right span {
		transform: translate(-75%, -50%) rotate(135deg);
	}

	@media (max-width: 768px) {
		.navigator-right {
			left: 40%;
		}
	}

	@media (max-width: 425px) {
		.navigator-right {
			left: calc(15% + 8.5px);
		}

		.navigator {
			width: 25px;
			height: 25px;
		}

		.navigator span {
			width: 5px;
			height: 5px;

		}
	}
`;

const TimelineNavigator = ({
	countDots,
	activeDot,
	goToPreviousDot,
	goToNextDot,
}: NavigatorProps) => {
	return (
		<TimelineNavigatorContainer className='navigator__container'>
			<p style={{ color: "#42567A", fontSize: "14px" }}>
				0{activeDot}/0{countDots}
			</p>
			<NavigatorContainer>
				<div
					className='navigator navigator-left'
					onClick={() => goToPreviousDot()}>
					<span></span>
				</div>
				<div
					className='navigator navigator-right'
					onClick={() => goToNextDot()}>
					<span></span>
				</div>
			</NavigatorContainer>
		</TimelineNavigatorContainer>
	);
};

function mapStateToProps(
	state: AppState
): Pick<NavigatorProps, "activeDot" | "countDots"> {
	return { countDots: state.countDots, activeDot: state.activeDot };
}

function mapDispatchToProps(
	dispatch: Dispatch<AppAction>
): Pick<NavigatorProps, "goToNextDot" | "goToPreviousDot"> {
	return {
		goToPreviousDot: () => dispatch({ type: "GO_TO_PREVIOUS_DOT" }),
		goToNextDot: () => dispatch({ type: "GO_TO_NEXT_DOT" }),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineNavigator);
