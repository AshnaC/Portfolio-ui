import { takeLatest, spawn, put, all, take } from "redux-saga/effects";
import {
    GET_POPULAR_MOVIES,
    GET_RECOMMENDED_MOVIES,
    SEARCH_MOVIES,
    GET_MOVIES_DETAILS
} from "./constants";
import {
    setPopularMovies,
    setError,
    setMovieDetails,
    setRecommendedMovies,
    setSearchList
} from "./actions";

function* getPopularMovies() {
    try {
        let popularMovies = yield fetchApi("api/popularMovies");
        yield put(setPopularMovies(popularMovies));
        yield getMoviesDetails({ movies: popularMovies });
    } catch (er) {
        yield put(setError());
    }
}

function* getMoviesDetails(action) {
    const { movies } = action;
    yield* movies.map(function*(elt) {
        yield spawn(getMovieDetails, elt);
    });
}

function* getMovieDetails(movie) {
    try {
        const { movieIndex } = movie;
        let movieData = yield getImdbMovieData(movie);
        movieData = { ...movieData, movieIndex };
        yield put(setMovieDetails(movieData));
    } catch (er) {
        console.log("err");
    }
}

function* searchForMovies(action) {
    try {
        let searchList = yield fetchApi(`api/search/${action.param}`);
        searchList = searchList.filter(elt => elt.tmdbId);
        yield put(setSearchList(searchList));
    } catch (err) {}
}

function* getRecommendedMovies(action) {
    try {
        const { movieIndex } = action;
        let recommendedMovies = yield fetchApi(`api/recommendedMovies/${movieIndex}`);
        recommendedMovies = recommendedMovies.filter(elt => elt.tmdbId);
        debugger;
        yield put(setRecommendedMovies(recommendedMovies));
    } catch (err) {}
}

async function getImdbMovieData(movie) {
    const { tmdbId } = movie;
    let movieDetails = await fetchApi(
        `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=8d02025ec9fec7dd5898e41e05344417`
    );
    let crewDetails = await fetchApi(
        `https://api.themoviedb.org/3/movie/${tmdbId}/credits?api_key=8d02025ec9fec7dd5898e41e05344417`
    );
    return { ...movieDetails, crewDetails };
}

export default function* rootSaga() {
    yield all([
        takeLatest(GET_POPULAR_MOVIES, getPopularMovies),
        takeLatest(GET_RECOMMENDED_MOVIES, getRecommendedMovies),
        takeLatest(SEARCH_MOVIES, searchForMovies),
        takeLatest(GET_MOVIES_DETAILS, getMoviesDetails)
    ]);
}

async function fetchApi(url, options) {
    const response = await fetch(url, options);
    if (response.status !== 200) {
        throw new Error();
    }
    const result = await response.json();
    return result;
}
