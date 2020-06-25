import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieSingle } from "../actions/movieAction";
import { addMovieToList, removeMovieFromList } from "../actions/userAction";
import Spinner from "./Spinner";
import Navbar from "./Navbar";

const na =
	"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg";
const noBackground = {
	background: "none",
};
export default function MovieSingle({ match }) {
	const dispatch = useDispatch();
	const { id } = match.params;
	const movie = useSelector((state) => state.movie.movieSingle);
	const isLoading = useSelector((state) => state.movie.isLoading);
	const isInList = useSelector((state) => state.user.list.includes(id));
	useEffect(() => {
		dispatch(getMovieSingle(id));
	}, []);

	return (
		<div>
			<Navbar />

			<div className="container">
				{isLoading ? (
					<Spinner />
				) : movie && movie.Response === "True" ? (
					<div>
						<div className="row my-5">
							<div className="col-md-4 card card-body" style={noBackground}>
								<img
									src={movie.Poster === "N/A" ? na : movie.Poster}
									className="thumbnail position-relative"
									alt="Poster"
								/>
							</div>
							<div className="col-md-8">
								<div className="d-flex flex-row justify-content-between align-items-start">
									<h2 className="mb-4 d-inline-block">{movie.Title}</h2>
									{isInList ? (
										<button
											type="button"
											className="btn text-danger"
											onClick={() => {
												dispatch(removeMovieFromList(movie.imdbID));
											}}
										>
											<i className="fas fa-heart fa-2x"></i>
										</button>
									) : (
										<button
											type="button"
											className="btn"
											onClick={() => {
												dispatch(addMovieToList(movie.imdbID));
											}}
										>
											<i className="far fa-heart fa-2x"></i>
										</button>
									)}
								</div>

								<ul className="list-group">
									<li className="list-group-item" style={noBackground}>
										<strong>Year:</strong> {movie.Year}
									</li>
									<li className="list-group-item" style={noBackground}>
										<strong>Genre:</strong> {movie.Genre}
									</li>
									<li className="list-group-item" style={noBackground}>
										<strong>Released:</strong> {movie.Released}
									</li>
									<li className="list-group-item" style={noBackground}>
										<strong>Rated:</strong> {movie.Rated}
									</li>
									<li className="list-group-item" style={noBackground}>
										<strong>IMDB Rating:</strong> {movie.imdbRating} -{" "}
										<strong>IMDB Votes:</strong> {movie.imdbVotes}
									</li>
									<li className="list-group-item" style={noBackground}>
										<strong>Director:</strong> {movie.Director}
									</li>
									<li className="list-group-item" style={noBackground}>
										<strong>Actors:</strong> {movie.Actors}
									</li>
									<li className="list-group-item" style={noBackground}>
										<strong>Awards:</strong> {movie.Awards}
									</li>
								</ul>
							</div>
						</div>
						<div className="row">
							<div
								className="card card-body mb-5 text-dark"
								style={noBackground}
							>
								<div className="col-md-12">
									<h3>About </h3>
									{movie.Plot}
									<hr />
									<a
										href={"https://www.imdb.com/title/" + movie.imdbID}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										View on IMDB
									</a>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%,-50%)",
						}}
					>
						<h1 className="text-danger">Oops...</h1>
						<h5>Content not found</h5>
					</div>
				)}
			</div>
		</div>
	);
}
