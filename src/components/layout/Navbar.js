import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
			<div className="navbar-nav text-light">
				<Link className="navbar-brand" to="/">
					FilmPedia
				</Link>
			</div>
			<ul className="ml-auto navbar-nav text-light">
				<li className="nav-item mr-3">
					<i className="fab fa-imdb fa-3x"></i>
				</li>
				<li className="nav-item">
					<i className="fab fa-react fa-3x"></i>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
