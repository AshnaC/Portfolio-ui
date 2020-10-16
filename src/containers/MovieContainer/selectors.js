import { createSelector } from "reselect";

const selectMovieResourcesDomain = state => state.movieResources;

const getStateSelector = createSelector(selectMovieResourcesDomain, subState => subState);

export default getStateSelector;
