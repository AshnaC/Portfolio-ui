/*
 *
 * MovieContainer reducer
 *
 */

import {
    SET_POPULAR_MOVIES,
    SET_ERROR,
    SET_MOVIE_DETAILS,
    SET_RECOMMENDED_MOVIES,
    SET_SEARCH_LIST
} from "./constants";

const initialState = { movieDetails: {} };

function movieContainerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            const { popularMovies } = action;
            return { ...state, popularMovies };
        case SET_ERROR:
            return { ...state, error: true };
        case SET_MOVIE_DETAILS:
            const { movieData } = action;
            const { movieIndex } = movieData;
            const { movieDetails } = state;
            movieDetails[movieIndex] = movieData;
            return { ...state, movieDetails };
        case SET_RECOMMENDED_MOVIES:
            const { recommendedMovies } = action;
            return { ...state, recommendedMovies };
        case SET_SEARCH_LIST:
            const { searchList } = action;
            return { ...state, searchList };
        default:
            return state;
    }
}

export default movieContainerReducer;
