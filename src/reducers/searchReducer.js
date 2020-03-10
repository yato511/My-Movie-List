import {
	SEARCH_MOVIE,
	FETCH_MOVIES,
	FETCH_MOVIE,
	SET_LOADING
} from "../actions/types";

const initialStates = {
	text: "",
	movies: [],
	loading: false,
	result: {}
};

export default (state = initialStates, action) => {
	switch (action.type) {
		case SEARCH_MOVIE:
			return {
				...state,
				text: action.payload,
				loading: false
			};
		case FETCH_MOVIES:
			return {
				...state,
				result: action.payload,
				loading: false
			};
		case FETCH_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
