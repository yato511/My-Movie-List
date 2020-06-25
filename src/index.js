import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Provider store={store}>
		<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
