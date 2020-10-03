import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

//test condition jika button props isDisabled
test("Should not allowed click button if isDisabled is present", () => {
	const { container } = render(<Button isDisabled></Button>);

	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

//test condition loading
//regex /loading/ untuk nyari kata "loading", regex case insensitive
test("Should render loading/spinner", () => {
	const { container, getByText } = render(<Button isLoading></Button>);

	expect(getByText(/loading/i)).toBeInTheDocument();
	expect(container.querySelector("span")).toBeInTheDocument();
});

//test link external
test("Should render <a> tag", () => {
	const { container } = render(<Button type="link" isExternal></Button>);

	expect(container.querySelector("a")).toBeInTheDocument();
});
//test link internal aplikasi
test("Should render <Link> tag", () => {
	const { container } = render(
		<Router>
			<Button href="" type="link" isExternal></Button>
		</Router>
	);

	expect(container.querySelector("a")).toBeInTheDocument();
});
