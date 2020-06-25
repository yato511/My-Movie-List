import {
	ADD_MOVIE,
	REMOVE_MOVIE,
	GET_FULL_LIST,
	GET_MORE_FULL_LIST,
	SET_LOADING_LIST,
	SET_LOADING_MORE,
	GET_YOUR_LIST,
} from "../actions/types";

const initialState = {
	list: [],
	isLoading: false,
	fullList: [],
	isLoadingMore: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			return {
				...state,
				list: [...state.list, action.payload],
			};
		case REMOVE_MOVIE:
			return {
				...state,
				list: state.list.filter((id) => id !== action.payload),
				fullList: state.fullList.filter(
					(movie) => movie.imdbID !== action.payload
				),
			};
		case GET_YOUR_LIST:
			return {
				...state,
				list: action.payload,
			};
		case GET_FULL_LIST:
			return {
				...state,
				fullList: action.payload,
				isLoading: false,
			};
		case GET_MORE_FULL_LIST: {
			if (action.payload.length === 0)
				return {
					...state,
					isLoadingMore: false,
					isLoading: false,
				};
			else
				return {
					...state,
					fullList: [...state.fullList, ...action.payload],
					isLoadingMore: false,
					isLoading: false,
				};
		}

		case SET_LOADING_LIST:
			return {
				...state,
				isLoading: action.payload,
			};
		case SET_LOADING_MORE:
			return {
				...state,
				isLoadingMore: action.payload,
			};
		default:
			return state;
	}
};
