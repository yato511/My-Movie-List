import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SET_LOADING } from "./types";
import key from "../config/OMDBKey";
import axios from "axios";

export const searchMovie = text => dispatch => {
	dispatch({
		type: SEARCH_MOVIE,
		payload: text
	});
};
export const setLoading = () => ({
	type: SET_LOADING
});

export const fetchMovies = text => dispatch => {
	axios
		.get(`http://www.omdbapi.com/?apikey=${key}&s=${text}`)
		.then(response => {
			// console.log(response);
			dispatch({
				type: FETCH_MOVIES,
				payload: response.data
			});
		})
		.catch(err => console.log(err));
};
export const fetchMovie = id => dispatch => {
	axios
		.get(`http://www.omdbapi.com/?apikey=${key}&i=${id}`)
		.then(response => {
			// console.log(response);
			dispatch({
				type: FETCH_MOVIE,
				payload: response.data
			});
		})
		.catch(err => console.log(err));
};
