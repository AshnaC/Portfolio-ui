/**
 *
 * MovieContainer
 *
 */

import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import reducerRegistry from "../../store/reducerRegistry";
import sagaRegistry from "../../store/sagaRegistry";
import reducer from "./reducer";
import saga from "./saga";
import { getPopularMovies, getRecommendedMovies, searchMovies, getMoviesDetails } from "./actions";

import { useSelector, useDispatch, shallowEqual } from "react-redux";

import getStateSelector from "./selectors";

import ExplorerLayout from "../../components/ExplorerLayout";

export default function MovieContainer() {
    const dispatch = useDispatch();
    const movieResources = useSelector(getStateSelector);

    useEffect(() => {
        dispatch(getPopularMovies());
    }, []);

    // console.log("movieResources", movieResources);
    const { popularMovies, recommendedMovies, searchList, movieDetails, error } =
        movieResources || {};

    const getSimilarMovies = useCallback(movieIndex => {
        dispatch(getRecommendedMovies(movieIndex));
    }, []);

    useEffect(() => {
        if (recommendedMovies) {
            let moviesToFetch = [];
            recommendedMovies.forEach(elt => {
                if (!movieDetails[elt.movieIndex]) {
                    moviesToFetch = [...moviesToFetch, elt];
                }
            });
            dispatch(getMoviesDetails(moviesToFetch));
        }
    }, [recommendedMovies]);

    const memoSearchMovies = useCallback(searchParam => {
        dispatch(searchMovies(searchParam));
    }, []);

    return (
        <ExplorerLayout
            error={error}
            searchList={searchList}
            searchMovies={memoSearchMovies}
            getSimilarMovies={getSimilarMovies}
            movieDetails={movieDetails}
            moviesList={recommendedMovies || popularMovies}
        />
    );
}

MovieContainer.propTypes = {
    getResources: PropTypes.object,
    resetStatus: PropTypes.func,
    searchFalcon: PropTypes.func,
    loadOptions: PropTypes.func
};

reducerRegistry.register("movieResources", reducer);
sagaRegistry.register("movieResources", saga);
