import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieSingle from "./components/MovieSingle";
import WishList from "./components/WishList";

import store from "./store";
import FloatButton from "./components/FloatButton";
import ResultPage from "./components/ResultPage";

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/movie/:id" component={MovieSingle} />
						<Route exact path="/result/" component={ResultPage} />
						<Route path="/your-list" component={WishList} />
					</Switch>

					<FloatButton />
				</Router>
			</Provider>
		);
	}
}

export default App;
