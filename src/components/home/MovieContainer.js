import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class MovieContainer extends Component {
	render() {
		const { result } = this.props;
		const error = (
			<div className="col-md-12">
				<h1 className="text-center">{result.Error}</h1>
			</div>
		);
		let content =
			result.Response === "True"
				? result.Search.map((item, index) => (
						<MovieCard key={index} movie={item} />
				  ))
				: error;

		return <div className="row my-3">{content}</div>;
	}
}

const mapStateToProps = state => ({
	result: state.searchMovie.result
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
