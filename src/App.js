import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieSingle from "./components/MovieSingle";
import WishList from "./components/WishList";

import FloatButton from "./components/FloatButton";
import ResultPage from "./components/ResultPage";
import NotFound from "./components/NotFound";

export default function App(props) {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/movie/:id" component={MovieSingle} />
			<Route path="/result/" component={ResultPage} />
			<Route path="/your-list" component={WishList} />
			<Route component={NotFound} />
			<FloatButton />
		</Switch>
	);
}
