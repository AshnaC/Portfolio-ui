/**
 *
 * ExplorerLayout
 *
 */

import React, { Fragment, useState, useEffect } from "react";

import {
    Wrapper,
    Interstitial,
    ImageWrapper,
    InterstitialWhite,
    Content,
    ImageInterstitial,
    Title,
    OverView,
    TagLine,
    GenreItem,
    Genres,
    CastWrapper,
    Cast,
    CastName,
    CastImage,
    RatingWrapper,
    ChartWrapper,
    ProgressWrapper,
    OverViewHeading,
    Character,
    Label
} from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import noImage from "../../images/noImage.jpg";

function MovieView(props) {
    const [rating, setRating] = useState(0);
    console.log(props.movie);
    const { movie } = props;

    const {
        poster_path,
        backdrop_path,
        title,
        overview,
        vote_average = 0,
        genres,
        release_date,
        tagline,
        crewDetails
    } = movie;
    console.log("movies", movie);
    useEffect(() => {
        setRating(0);
        setTimeout(() => setRating(vote_average), 0);
    }, [movie]);

    return (
        <Wrapper>
            <Interstitial />
            <ImageInterstitial
                imgUrl={`https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}`}
            />

            <Content>
                <Title>
                    {title} {release_date && `( ${release_date.slice(0, 4)} )`}
                </Title>
                <RatingWrapper>
                    <Genres>
                        {Array.isArray(genres) &&
                            genres.map((elt, index) => (
                                <Fragment key={elt.id}>
                                    <GenreItem>{elt.name}</GenreItem>
                                    {index !== genres.length - 1 && "|"}
                                </Fragment>
                            ))}
                    </Genres>
                    <ProgressWrapper>
                        User Rating:
                        <ChartWrapper>
                            <CircularProgressbar
                                value={rating * 10}
                                text={`${vote_average * 10}%`}
                                strokeWidth={12}
                                styles={buildStyles({
                                    textColor: "#fff",
                                    trailColor: "#fff",
                                    pathColor: "turquoise",
                                    strokeLinecap: "butt"
                                })}
                            />
                        </ChartWrapper>
                    </ProgressWrapper>
                </RatingWrapper>

                <TagLine>" {tagline || title} "</TagLine>
                <OverView>
                    <OverViewHeading>Overview </OverViewHeading>
                    {overview}
                </OverView>
                <CastWrapper>
                    {crewDetails &&
                        crewDetails.cast &&
                        crewDetails.cast.slice(0, 3).map(elt => (
                            <Cast key={elt.id}>
                                <CastName>
                                    <Character>
                                        {elt.name} <Label>as</Label>
                                    </Character>

                                    <Character>{elt.character}</Character>
                                </CastName>
                                <CastImage
                                    src={`https://image.tmdb.org/t/p/w500/${elt.profile_path}`}
                                    onError={e => {
                                        e.target.src = noImage;
                                        e.target.onerror = "";
                                    }}
                                />
                            </Cast>
                        ))}
                </CastWrapper>
            </Content>
        </Wrapper>
    );
}

export default MovieView;
