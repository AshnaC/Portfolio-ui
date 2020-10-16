/**
 *
 * MovieExplorer
 *
 */

import React, { useState, useEffect, Fragment, useCallback } from "react";
import throttle from "lodash/throttle";

import { Search, ResultWrapper, SearchItem, ExplorerWrapper, Interstitial } from "./styles";

function MovieFinder(props) {
    const { searchMovies, searchList, getSimilarMovies, setSelectedMovie } = props;
    const [searchParam, setSearchParam] = useState("");
    const [showDropdown, setShowDropDown] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleSearch = event => {
        const { value } = event.target;
        if (value && value.length > 2 && value !== searchParam) {
            onSearch(value);
        }
    };

    useEffect(() => {
        if (searchList) {
            setShowDropDown(true);
        }
    }, [searchList]);

    const onInputChange = event => {
        const { value } = event.target;
        setInputValue(value);
    };

    const onSearchInputChange = searchText => {
        console.log("called", searchText);
        setSearchParam(searchText);
        searchMovies(searchText);
    };

    const onSearch = useCallback(throttle(onSearchInputChange, 1000), []);

    const selectMovies = movie => () => {
        setSelectedMovie(movie);
        getSimilarMovies(movie.movieIndex);
        setShowDropDown(false);
        setInputValue(movie.title);
    };

    const onInputClick = () => {
        let showSearchDropDown = false;
        if (searchList) {
            showSearchDropDown = true;
        }
        setShowDropDown(showSearchDropDown);
    };

    const toggleDropdown = showSearchDropDown => () => {
        setShowDropDown(showSearchDropDown);
    };

    return (
        <ExplorerWrapper>
            <Search
                value={inputValue}
                onKeyUp={handleSearch}
                onClick={onInputClick}
                onChange={onInputChange}
                placeholder="Search movies"
            />
            {searchList && showDropdown && (
                <Fragment>
                    <ResultWrapper>
                        {searchList.map((item, indx) => (
                            <SearchItem
                                key={`${item.movieIndex}_${indx}`}
                                onClick={selectMovies(item)}
                            >
                                {item.title}
                            </SearchItem>
                        ))}
                    </ResultWrapper>
                    <Interstitial onClick={toggleDropdown(false)} />
                </Fragment>
            )}
        </ExplorerWrapper>
    );
}

export default MovieFinder;
