import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

class TestInput extends React.Component {
	state = {
		value: "",
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<InputNumber
				max={30}
				onChange={this.handleChange}
				name="value"
				value={this.state.value}
			/>
		);
	}
}

const setup = () => {
	const { container } = render(<TestInput />);
	const input = container.querySelector(`input.form-control[name='value']`);

	return {
		input,
	};
};
//test hasil 23, fireEvent digunakan untuk simulasi seperti input di web browser
test("Should be able to change value", () => {
	const { input } = setup();

	fireEvent.change(input, { target: { value: 23 } });
	console.log(input.value);
	expect(input.value).toBe("23");
});
//test jika lewat dari batasnya (>30)
test("Should not be able to change value when reach max value", () => {
	const { input } = setup();

	fireEvent.change(input, { target: { value: 33 } });
	console.log(input.value);
	expect(input.value).toBe("");
});
