import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { TimelineCircleProps } from "../types/components";

const Circle = styled.div`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 530px;
	height: 530px;
	border-radius: 50%;
	border: 1px solid #d9d9d9;
	transition: all 1s;
	z-index: 3;

	@media (max-width: 1440px) {
		width: 400px;
		height: 400px;
	}

	@media (max-width: 1024px) {
		width: 350px;
		height: 350px;
		top: 40%;
	}

	@media (max-width: 768px) {
		display: none;
	}
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
		top: 45%;
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

const Category = styled.p<{ $visible: boolean }>`
	position: absolute;
	top: 50%;
	left: 75px;
	transform: translateY(-50%);
	font-size: 20px;
	font-weight: bold;
	color: rgba(66, 86, 122, 1);
	transition: all 0.3s;
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

const TimelineCircle = ({
	countDots,
	activeDot,
	events,
	onDotClick,
}: TimelineCircleProps) => {
	const [visible, setVisible] = useState(false);
	const [localDot, setLocalDot] = useState(activeDot);

	const circleRef = useRef<HTMLDivElement>(null);
	const [radius, setRadius] = useState(265);

	useEffect(() => {
		setVisible(false);

		const timer = setTimeout(() => {
			setVisible(true);
			setLocalDot(activeDot);
		}, 1000);

		return () => clearTimeout(timer);
	}, [activeDot]);

	useEffect(() => {
		const element = circleRef.current;
		if (!element) return;

		const observer = new ResizeObserver((entries) => {
			const newWidth = entries[0].contentRect.width;
			setRadius(newWidth / 2);
		});

		observer.observe(element);

		setRadius(element.offsetWidth / 2);

		return () => observer.disconnect();
	}, []);

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
	}, [countDots, radius]);

	let category: string = "";

	if (events && events[localDot - 1]) {
		category = events[localDot - 1].category;
	}

	return (
		<Circle
			ref={circleRef}
			className='circle'
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
					onClick={() => onDotClick(dot.index)}>
					<Category $visible={visible}>
						{localDot === dot.index ? category : null}
					</Category>
				</Dot>
			))}
		</Circle>
	);
};

export default TimelineCircle;
