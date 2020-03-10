import React from "react";

function Footer() {
	return (
		<div className="navbar-dark bg-dark py-1">
			<div className="navbar-nav text-light ">
				<p className="m-0 text-center">
					FilmPedia - Developed by Yato, Using ReactJS & ReduxJS integrated with
					external movies data{" "}
					<a
						href="http://www.omdbapi.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						API OMDB
					</a>
				</p>
			</div>
		</div>
	);
}

export default Footer;
