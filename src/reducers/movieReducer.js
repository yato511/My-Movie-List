import {
	GET_MOVIE_SINGLE,
	SET_LOADING,
	GET_MOVIE_LIST,
} from "../actions/types";

const initialStates = {
	input: "",
	movieList: null,
	movieSingle: null,
	isLoading: false,
};

export default (state = initialStates, action) => {
	switch (action.type) {
		case GET_MOVIE_LIST:
			return {
				...state,
				movieList: action.payload,
				isLoading: false,
			};
		case GET_MOVIE_SINGLE:
			return {
				...state,
				movieSingle: action.payload,
				isLoading: false,
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
