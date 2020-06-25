import { GET_MOVIE_SINGLE, SET_LOADING, GET_MOVIE_LIST } from "./types";
import key from "../config/OMDBKey";
import axios from "axios";

export const getMovieList = (text, page) => (dispatch) => {
	dispatch(setLoading(true));
	axios
		.get(`http://www.omdbapi.com/?apikey=${key}&s=${text}&page=${page}`)
		.then((res) => {
			setTimeout(() => {
				dispatch({
					type: GET_MOVIE_LIST,
					payload: res.data,
				});
			}, 1000);
		})
		.catch((err) => console.log(err));
};
export const getMovieSingle = (id) => (dispatch) => {
	dispatch(setLoading(true));
	axios
		.get(`http://www.omdbapi.com/?apikey=${key}&i=${id}&plot=full`)
		.then((res) => {
			setTimeout(() => {
				dispatch({
					type: GET_MOVIE_SINGLE,
					payload: res.data,
				});
			}, 1000);
		})
		.catch((err) => console.log(err));
};

export const setLoading = (loading) => (dispatch) => {
	dispatch({
		type: SET_LOADING,
		payload: loading,
	});
};
