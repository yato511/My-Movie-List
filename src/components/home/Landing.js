import React, { Component } from "react";
import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import MovieContainer from "./MovieContainer";
import Spinner from "../layout/Spinner";
export class Landing extends Component {
	render() {
		return (
			<div className="container-fluid">
				<SearchForm />
				{this.props.loading ? <Spinner /> : <MovieContainer />}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loading: state.searchMovie.loading
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
