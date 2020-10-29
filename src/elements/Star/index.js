import React from "react";

import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
	const decimals = Number(value) % 1;
	const star = [];
	let leftPos = 0;
	//*fungsi untuk nambah komponen star bilangan bulat
	for (let index = 0; index < 5 && index < value - decimals; index++) {
		leftPos = leftPos + width;
		star.push(
			<div
				className="star"
				key={`star-${index}`}
				style={{
					left: index * width,
					height: height,
					width: width,
					marginRight: spacing,
				}}
			></div>
		);
	}
	//*fungsi untuk nambah star bilangan desimal
	if (decimals > 0 && value <= 5)
		star.push(
			<div
				className="star"
				key={`starWithDecimal`}
				style={{
					left: leftPos,
					height: height,
					width: decimals * width - spacing,
				}}
			></div>
		);

	const starPlacholder = [];
	for (let index = 0; index < 5; index++) {
		leftPos = leftPos + width;
		star.push(
			<div
				className="star placeholder"
				key={`starPlaceholder-${index}`}
				style={{
					left: index * width,
					height: height,
					width: width,
					marginRight: spacing,
				}}
			></div>
		);
	}
	return (
		<>
			<div
				className={["stars", className].join(" ")}
				style={{ height: height }}
			>
				{starPlacholder}
				{star}
			</div>
		</>
	);
}

Star.propTypes = {
	className: propTypes.string,
	value: propTypes.number,
	height: propTypes.number,
	width: propTypes.number,
	spacing: propTypes.number,
};
