/**
 *
 * MovieLister
 *
 */

import React, { Fragment } from "react";
import {
    Poster,
    MovieDetail,
    Header,
    Rating,
    MovieName,
    Description,
    MovieCard,
    Heading,
    MovieListWrapper
} from "./styles";

import noImage from "../../images/noImage.jpg";

function MovieLister(props) {
    const { getSimilarMovies, movies, setSelectedMovie } = props;

    const onMovieClick = movie => () => {
        window.scrollTo(0, 0);
        getSimilarMovies(movie.movieIndex);
        setSelectedMovie(movie);
    };

    return (
        <Fragment>
            <Heading>Recommended Movies</Heading>
            <MovieListWrapper>
                {movies.map(item => (
                    <MovieCard key={item.movieIndex} onClick={onMovieClick(item)}>
                        <Poster
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path ||
                                item.backdrop_path}`}
                            onError={e => {
                                e.target.src = noImage;
                                e.target.onerror = "";
                            }}
                        />
                        <MovieDetail>
                            <Header>
                                <MovieName>{item.title}</MovieName>
                                <Rating>Rating:{item.vote_average || 0 * 10}%</Rating>
                            </Header>
                            <Description>{item.overview}</Description>
                        </MovieDetail>
                    </MovieCard>
                ))}
            </MovieListWrapper>
        </Fragment>
    );
}

export default MovieLister;
