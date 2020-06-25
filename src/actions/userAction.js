import {
	ADD_MOVIE,
	REMOVE_MOVIE,
	GET_FULL_LIST,
	SET_LOADING_LIST,
	GET_YOUR_LIST,
	GET_MORE_FULL_LIST,
	SET_LOADING_MORE,
} from "./types";
import axios from "axios";
import key from "../config/OMDBKey";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
	toast: true,
	position: "bottom-start",
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

export const addMovieToList = (movieID) => (dispatch) => {
	const oldList = localStorage.getItem("list") || "";
	localStorage.setItem("list", oldList + " " + movieID);
	dispatch({
		type: ADD_MOVIE,
		payload: movieID,
	});

	Toast.fire({
		icon: "success",
		title: "Added movie successfully",
	});
};

export const removeMovieFromList = (movieId) => (dispatch) => {
	const oldList = localStorage.getItem("list") || "";
	if (oldList.length) {
		localStorage.setItem("list", oldList.replace(movieId, "").trim());
	}
	dispatch({
		type: REMOVE_MOVIE,
		payload: movieId,
	});
	Toast.fire({
		icon: "warning",
		title: "Removed movie successfully",
	});
};

export const getYourList = () => (dispatch) => {
	const list = localStorage.getItem("list");
	if (list && list.length) {
		dispatch({
			type: GET_YOUR_LIST,
			payload: list.trim().split(/\s+/),
		});
	}
};

export const getFullList = () => (dispatch) => {
	let list = localStorage.getItem("list");
	if (list && list.length) {
		list = list.trim().split(/\s+/);
		dispatch({
			type: SET_LOADING_LIST,
			payload: true,
		});
		Promise.all(
			list.map((id) =>
				axios
					.get(`http://www.omdbapi.com/?apikey=${key}&i=${id}`)
					.then((res) => res.data)
					.catch((err) => console.log(err))
			)
		)
			.then((fullList) =>
				setTimeout(() => {
					dispatch({
						type: GET_FULL_LIST,
						payload: fullList,
					});
				}, 500)
			)
			.catch((err) => console.log(err));
	}
};

export const getMoreInFullList = (offset, quantity) => (dispatch) => {
	let list = localStorage.getItem("list");
	if (list && list.length) {
		list = list.trim().split(/\s+/);
		if (offset === 0)
			dispatch({
				type: SET_LOADING_LIST,
				payload: true,
			});
		else
			dispatch({
				type: SET_LOADING_MORE,
				payload: true,
			});
		if (list.length <= offset) {
			dispatch({
				type: GET_MORE_FULL_LIST,
				payload: [],
			});
		} else {
			const more = list.slice(offset, offset + quantity);
			console.log(list, more);
			Promise.all(
				more.map((id) =>
					axios
						.get(`http://www.omdbapi.com/?apikey=${key}&i=${id}`)
						.then((res) => res.data)
						.catch((err) => console.log(err))
				)
			)
				.then((fullList) =>
					setTimeout(() => {
						dispatch({
							type: GET_MORE_FULL_LIST,
							payload: fullList,
						});
					}, 500)
				)
				.catch((err) => console.log(err));
		}
	}
};
