/*
 *
 * MovieContainer actions
 *
 */

import {
    GET_POPULAR_MOVIES,
    SET_POPULAR_MOVIES,
    SET_ERROR,
    SET_MOVIE_DETAILS,
    GET_RECOMMENDED_MOVIES,
    SET_RECOMMENDED_MOVIES,
    SEARCH_MOVIES,
    SET_SEARCH_LIST,
    GET_MOVIES_DETAILS
} from "./constants";

export const getPopularMovies = () => {
    return {
        type: GET_POPULAR_MOVIES
    };
};

export const setPopularMovies = popularMovies => {
    return {
        type: SET_POPULAR_MOVIES,
        popularMovies
    };
};

export const setError = () => {
    return {
        type: SET_ERROR
    };
};

export const setMovieDetails = movieData => {
    return {
        type: SET_MOVIE_DETAILS,
        movieData
    };
};

export const getRecommendedMovies = movieIndex => {
    return {
        type: GET_RECOMMENDED_MOVIES,
        movieIndex
    };
};

export const setRecommendedMovies = recommendedMovies => {
    return {
        type: SET_RECOMMENDED_MOVIES,
        recommendedMovies
    };
};

export const setSearchList = searchList => {
    return {
        type: SET_SEARCH_LIST,
        searchList
    };
};

export const searchMovies = param => {
    return {
        type: SEARCH_MOVIES,
        param
    };
};

export const getMoviesDetails = movies => {
    return {
        type: GET_MOVIES_DETAILS,
        movies
    };
};
