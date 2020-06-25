import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	removeMovieFromList,
	getFullList,
	getMoreInFullList,
} from "../actions/userAction";
import Spinner from "./Spinner";
import spinner from "./spinner.gif";
import Navbar from "./Navbar";

function WishItem({ movie }) {
	return (
		<div className="row">
			<div className="col-md-2">
				<img src={movie.Poster} className="w-100" alt="Poster" />
			</div>
			<div className="col-md-10 d-flex flex-column justify-content-center">
				<Link
					to={`/movie/${movie.imdbID}`}
					style={{ textDecoration: "none" }}
					className="my-1"
				>
					<h5>
						{movie.Title}{" "}
						<span className="badge badge-danger">{movie.Year}</span>
					</h5>
				</Link>
				<p className="my-1">
					<strong>Genre:</strong> {movie.Genre}
				</p>
				<p className="my-1">
					<strong>IMDB Rating:</strong> {movie.imdbRating}
				</p>
			</div>
		</div>
	);
}

export default function WishList() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.user.isLoading);
	const fullList = useSelector((state) => state.user.fullList);
	const isLoadingMore = useSelector((state) => state.user.isLoadingMore);
	const list = useSelector((state) => state.user.list);
	useEffect(() => {
		dispatch(getMoreInFullList(0, 5));
	}, []);
	return (
		<div>
			<Navbar />
			<div className="container my-4">
				<div className="row">
					<div className="col-md-12 mb-3">
						<h3>{list.length} Movies In Your List</h3>
					</div>
				</div>
				{isLoading ? (
					<Spinner />
				) : fullList.length ? (
					<table className="table table-hover border border-dark">
						<thead className="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Movie</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{fullList.map((movie, index) =>
								movie.Response === "True" ? (
									<tr key={index}>
										<th style={{ verticalAlign: "middle" }} scope="row">
											{index + 1}
										</th>
										<td style={{ verticalAlign: "middle" }}>
											<WishItem movie={movie} />
										</td>

										<td style={{ width: "20%", verticalAlign: "middle" }}>
											<button
												className="btn btn-danger my-2"
												onClick={() =>
													dispatch(removeMovieFromList(movie.imdbID))
												}
												style={{ width: "100%" }}
											>
												Remove <i className="fas fa-trash"></i>
											</button>
											<a
												className="btn btn-success my-2"
												href={`https://www.imdb.com/title/${movie.imdbID}`}
												style={{ width: "100%" }}
												target="_blank"
												rel="noopener noreferrer"
											>
												View on IMDB <i className="fas fa-arrow-right"></i>
											</a>
										</td>
									</tr>
								) : null
							)}
						</tbody>
						<tfoot>
							<tr className="text-center">
								<td colSpan="3">
									{isLoadingMore ? (
										<img src={spinner} className="img-fluid" alt="...loading" />
									) : fullList.length === list.length ? null : (
										<div className="mx-auto">
											<button
												className="btn btn-primary w-25"
												onClick={() => {
													dispatch(getMoreInFullList(fullList.length, 5));
												}}
											>
												{"Load " +
													(list.length - fullList.length > 5
														? 5
														: list.length - fullList.length) +
													" more"}
											</button>
											<button
												className="btn btn-success w-25"
												onClick={() => dispatch(getFullList())}
											>
												Load all movie in Your List
											</button>
										</div>
									)}
								</td>
							</tr>
						</tfoot>
					</table>
				) : (
					"Your list is empty"
				)}
			</div>
		</div>
	);
}
