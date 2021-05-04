import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createBrowserHistory } from "history";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import NotFound from "pages/404";

import "assets/scss/style.scss";

const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL,
});

function App() {
	// This effect runs once, after the first render
	useEffect(() => {
		document.title = "Staycation";
	}, []);
	return (
		<div className="App">
			<Router history={history} basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/properties/:id" component={DetailsPage} />
					<Route path="/checkout" component={Checkout} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>

			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
