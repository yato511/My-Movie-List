import React, { Component } from "react";
import { connect } from "react-redux";
import {
	searchMovie,
	fetchMovies,
	setLoading
} from "../../actions/searchAction";

export class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.searchMovie(e.target.value);
	}
	handleClick(e) {
		e.preventDefault();
		this.props.fetchMovies(this.props.text);
		this.props.setLoading();
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid my-0">
				<div className="container w-75">
					<form>
						<div className="form-group">
							<label htmlFor="searchInput" className="display-4">
								Search for movie...
							</label>
							<input
								className="form-control form-control-lg"
								type="text"
								onChange={this.handleChange}
							/>
						</div>
						<hr className="my-4" />
						<button
							type="submit"
							className="btn btn-primary w-50 mx-auto d-block"
							onClick={this.handleClick}
						>
							Search <i className="fas fa-search"></i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	text: state.searchMovie.text
});

const mapDispatchToProps = { searchMovie, fetchMovies, setLoading };

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
