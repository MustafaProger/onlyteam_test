import React, { useMemo } from "react";
import { connect } from "react-redux";
import { CountDots } from "../interfaces/interfaces";
import styled from "styled-components";


const Circle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 530px;
	height: 530px;
	border-radius: 50%;
	border: 1px solid #d9d9d9;
`;

const Dot = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: rgba(66, 86, 122, 1);
	position: absolute;
	transform: translate(-50%, -50%);
	cursor: pointer;

	&::after {
		content: attr(data-index);
		position: absolute;
		top: -24px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		transition: 0.3s;
		color: #000;
		font-size: 14px;
	}

	&:hover::after {
		opacity: 1;
	}
`;

const TimelineCircle = ({ countDots }: CountDots) => {
	const radius = 265;

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
		<Circle>
			{dots.map((dot, i) => (
				<Dot
					key={i}
					data-index={dot.index}
					style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
				/>
			))}
		</Circle>
	);
};

function mapStatetoProps(state: any): CountDots {
	return { countDots: state.countDots };
}

export default connect(mapStatetoProps)(TimelineCircle);
