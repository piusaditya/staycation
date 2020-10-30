import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" component={LandingPage}></Route>
				<Route path="/details" component={DetailsPage}></Route>
			</Router>
		</div>
	);
}

export default App;
