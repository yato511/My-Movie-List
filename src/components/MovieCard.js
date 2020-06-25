import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieToList, removeMovieFromList } from "../actions/userAction";
import "../css/card.css";
const na =
	"https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";

export default function MovieCard({ movie }) {
	const dispatch = useDispatch();
	const [hovering, setHovering] = useState(false);
	const isInList = useSelector((state) =>
		state.user.list.includes(movie.imdbID)
	);
	return (
		<div
			className="card  h-100 rounded-0"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			data-toggle="tooltip"
			title={movie.Title}
		>
			<div
				style={{
					height: 250,
					background: "none",
					lineHeight: "250px",
				}}
			>
				<Link to={"/movie/" + movie.imdbID}>
					<img
						src={movie.Poster === "N/A" ? na : movie.Poster}
						className="card-img-top rounded-0 position-relative"
						alt="poster"
						style={{
							maxHeight: "100%",
							height: movie.Poster === "N/A" ? "100%" : "auto",
							opacity: hovering ? 0.7 : 1,
							transition: "opacity .15s ease-in-out",
							verticalAlign: "top",
						}}
					/>
					<span
						className="badge badge-danger"
						style={{
							position: "absolute",
							top: 5,
							left: 5,
						}}
					>
						{movie.Year}
					</span>
				</Link>
			</div>
			<div className="card-body p-2 d-flex flex-row justify-content-between bg-dark">
				<Link
					className="card-text text-light align-self-center"
					to={"/movie/" + movie.imdbID}
				>
					{movie.Title.length > 15
						? movie.Title.slice(0, 15) + "..."
						: movie.Title}
				</Link>
				{isInList ? (
					<button
						type="button"
						className="btn text-danger p-0"
						data-toggle="tooltip"
						title="Remove from Your List"
						onClick={() => {
							dispatch(removeMovieFromList(movie.imdbID));
						}}
					>
						<i className="fas fa-heart"></i>
					</button>
				) : (
					<button
						type="button"
						className="btn text-light p-0"
						ata-toggle="tooltip"
						title="Add to Your List"
						onClick={() => {
							dispatch(addMovieToList(movie.imdbID));
						}}
					>
						<i className="far fa-heart"></i>
					</button>
				)}
			</div>
		</div>
	);
}
