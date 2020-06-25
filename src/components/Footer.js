import React from "react";

function Footer() {
	return (
		<div className="navbar-dark bg-dark py-1">
			<div className="navbar-nav text-light ">
				<p className="m-0 text-center">
					FilmPedia - Using{" "}
					<a
						href="http://www.omdbapi.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						OMDB API
					</a>
					, made by Tran Quoc Toan
				</p>
			</div>
		</div>
	);
}

export default Footer;
