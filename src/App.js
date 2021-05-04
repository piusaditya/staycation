import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import NotFound from "pages/404";

import "assets/scss/style.scss";

function App() {
	// This effect runs once, after the first render
	useEffect(() => {
		document.title = "Staycation";
	}, []);
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/properties/:id" component={DetailsPage} />
				<Route path="/checkout" component={Checkout} />
				<Route path="*" component={NotFound} />
			</Router>

			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
