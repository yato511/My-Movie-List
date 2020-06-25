import React from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

export default function ResultPage({ location }) {
	const query = new URLSearchParams(location.search);
	const title = query.get("title");
	const page = parseInt(query.get("page"));

	return (
		<div>
			<Navbar title={title} />
			<div className="container">
				<MovieList input={title} currentPage={page} key={title + page} />
			</div>
		</div>
	);
}
