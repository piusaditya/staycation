import React from "react";

import propTypes from "prop-types";

import "./index.scss";

//prefix suffix tambahan misal kaya 2 nights yg nights itu suffix
export default function Number(props) {
	const {
		value,
		placeholder,
		name,
		min,
		max,
		prefix,
		suffix,
		isSuffixPlural,
	} = props;

	//fungsi event object mengganti nilai
	//issuffixplural ngecek if > 1 malam dan menambahkan s
	const onChange = (e) => {
		let value = String(e.target.value);

		if (+value <= max && +value >= min) {
			props.onChange({
				target: {
					name: name,
					value: +value,
				},
			});
		}
	};

	//untuk tombol minus hari
	const minus = () => {
		value > min &&
			onChange({
				target: {
					name: name,
					value: +value - 1,
				},
			});
	};
	//untuk tombol plus hari
	const plus = () => {
		value < max &&
			onChange({
				target: {
					name: name,
					value: +value + 1,
				},
			});
	};
	//return tampilan input date button (-) input-number  button (+)
	return (
		<div className={["input-number mb-3", props.outerClassName].join(" ")}>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text minus" onClick={minus}>
						-
					</span>
				</div>
				<input
					min={min}
					max={max}
					name={name}
					readOnly
					className="form-control"
					placeholder={placeholder ? placeholder : "0"}
					value={`${prefix}${value}${suffix}${
						isSuffixPlural && value > 1 ? "s" : ""
					}`}
					onChange={onChange}
				/>
				<div className="input-group-append">
					<span className="input-group-text plus" onClick={plus}>
						+
					</span>
				</div>
			</div>
		</div>
	);
}

Number.defaultProps = {
	min: 1,
	max: 1,
	prefix: "",
	suffix: "",
};

//proptypes untuk input number
//issuffixplural ngecek if > 1 malam dan menambahkan s
Number.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	onChange: propTypes.func,
	isSuffixPlural: propTypes.bool,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};
