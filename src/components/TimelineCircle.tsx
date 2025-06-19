import React, { useMemo } from "react";
import { connect } from "react-redux";
import { AppAction, AppState, DotsProps } from "../interfaces/interfaces";
import styled from "styled-components";
import { Dispatch } from "redux";

const Circle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 530px;
	height: 530px;
	border-radius: 50%;
	border: 1px solid #d9d9d9;
	transition: all 1s;
	z-index: 3;
`;

const Dot = styled.div`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background: transparent;
	position: absolute;
	transform: translate(-50%, -50%);
	cursor: pointer;
	transition: all 1s;

	&::after,
	&::before {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.5s;
		z-index: 1;
	}

	&::after {
		content: "";
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: rgba(66, 86, 122, 1);
	}

	&::before {
		content: attr(data-index);
		font-size: 20px;
		color: rgba(66, 86, 122, 1);
		opacity: 0;
		z-index: 2;
	}

	&:hover::after {
		width: 56px;
		height: 56px;
		background-color: #f4f5f9;
		border: 1px solid rgba(48, 62, 88, 0.5);
	}

	&:hover::before {
		opacity: 1;
	}

	&.active::before {
		opacity: 1;
	}

	&.active::after {
		width: 56px;
		height: 56px;
		background-color: #f4f5f9;
		border: 1px solid rgba(48, 62, 88, 0.5);
	}
`;

const TimelineCircle = ({ countDots, activeDot, setActiveDot }: DotsProps) => {
	const radius = 265;

	const stepAngle = 360 / countDots;
	const rotationCircle = -activeDot * stepAngle;

	const dots = useMemo(() => {
		return Array.from({ length: countDots }).map((_, i) => {
			const angleDeg = (360 / countDots) * i;
			const angleRad = (angleDeg * Math.PI) / 180;
			const x = radius + radius * Math.cos(angleRad);
			const y = radius + radius * Math.sin(angleRad);

			return { x, y, index: i + 1 };
		});
	}, [countDots]);

	return (
		<Circle
			style={{
				transform: `translate(-50%, -50%) rotate(${rotationCircle}deg)`,
			}}>
			{dots.map((dot, i) => (
				<Dot
					key={i}
					data-index={dot.index}
					style={{
						left: `${dot.x}px`,
						top: `${dot.y}px`,
						transform: `translate(-50%, -50%) rotate(${-(
							360 + rotationCircle
						)}deg)`,
					}}
					className={activeDot === dot.index ? "active" : ""}
					onClick={() => setActiveDot(dot.index)}
				/>
			))}
		</Circle>
	);
};

function mapStateToProps(
	state: AppState
): Pick<DotsProps, "activeDot" | "countDots"> {
	return { countDots: state.countDots, activeDot: state.activeDot };
}

function mapDispatchToProps(
	dispatch: Dispatch<AppAction>
): Pick<DotsProps, "setActiveDot"> {
	return {
		setActiveDot: (index) =>
			dispatch({ type: "SET_ACTIVE_DOT", payload: index }),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineCircle);
