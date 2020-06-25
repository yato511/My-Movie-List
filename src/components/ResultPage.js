import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import MovieList from "./MovieList";
import { getMovieList } from "../actions/movieAction";

export default function ResultPage({ location }) {
	const dispatch = useDispatch();
	const movieList = useSelector((state) => state.movie.movieList);
	const isLoading = useSelector((state) => state.movie.isLoading);
	const query = new URLSearchParams(location.search);
	const title = query.get("title");
	const page = parseInt(query.get("page"));

	useEffect(() => {
		dispatch(getMovieList(title, page));
	}, []);

	return (
		<div>
			<Navbar title={title} />
			<div className="container">
				{isLoading ? (
					<Spinner />
				) : movieList ? (
					<MovieList data={movieList} input={title} currentPage={page} />
				) : null}
			</div>
		</div>
	);
}
