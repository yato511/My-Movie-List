import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
	render() {
		const { movie } = this.props;
		const imgStyle = {
			width: "100%",
			height: "350px"
		};
		const na =
			"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg";
		return (
			<div className="col-md-3 mb-3">
				<div className="card card-body bg-dark text-center h-100">
					<Link to={"/movie/" + movie.imdbID}>
						<img
							className="mb-2 card-img-top"
							style={imgStyle}
							src={movie.Poster === "N/A" ? na : movie.Poster}
							alt="movie-cover"
						></img>
					</Link>

					<div class="card-body text-light p-2">
						<h5 className="card-title mb-0">{movie.Title}</h5>
						{/* <h6 className="card-title">{movie.Year}</h6> */}
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
