import React, { useCallback, useState } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";

import { SortFilterSearchComponent } from "../../components/SortFilterSearchComponent";
import { CardComponent } from "../../components/CardComponent";
import { CardListComponent } from "../../components/CardListComponent";
import { getTypographyHeadingBaseOnTag } from "../../Utils/ViewsUtility";
import { useParams } from "react-router-dom";
import { ButtonComponent } from "../../components/ButtonComponent";
import { ErrorComponent } from "../../components/ErrorComponent";
import { LoadingComponent } from "../../components/LoadingComponent";
import { useNavigate } from "react-router-dom";
import { ViewHoc } from "../../components/ViewHoc";

const Movies = (props) => {
  const navigate = useNavigate();
  const isMobileView = useMediaQuery("(max-width:900px)");
  const { tag } = useParams();
  const moviesRef = React.useRef(null);
  const [loadMoreMovies, setLoadMoreMovies] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [reLoadingData, setReLoadingData] = useState(false);

  const getMoviesBasedOnTag = useCallback(() => {
    if (tag === "popular") {
      const { popularMovies } = props;
      return popularMovies.toJS();
    } else if (tag === "nowplaying") {
      const { nowPlayingMovies } = props;
      return nowPlayingMovies.toJS();
    } else if (tag === "upcoming") {
      const { upcomingMovies } = props;
      return upcomingMovies.toJS();
    } else if (tag === "toprated") {
      const { topRatedMovies } = props;

      return topRatedMovies.toJS();
    }
    return null;
  }, [props, tag]);

  const dispatchActionsBasedOnTag = useCallback(() => {
    if (tag === "popular") {
      props.getPopularMovies();
      !getMoviesBasedOnTag()?.data.length && setLoadingData(true);
    } else if (tag === "nowplaying") {
      props.getNowPlayingMovies();
      !getMoviesBasedOnTag()?.data.length && setLoadingData(true);
    } else if (tag === "upcoming") {
      props.getUpcomingMovies();
      !getMoviesBasedOnTag()?.data.length && setLoadingData(true);
    } else if (tag === "toprated") {
      props.getTopRatedMovies();
      !getMoviesBasedOnTag()?.data.length && setLoadingData(true);
    }
  }, [props, tag, getMoviesBasedOnTag]);

  const callbackFunction = useCallback(
    (entries) => {
      const movies = getMoviesBasedOnTag();
      const { page, totalPages } = movies;

      if (
        loadMoreMovies &&
        entries[0].intersectionRatio > 0 &&
        page > 0 &&
        page < totalPages &&
        !getMoviesBasedOnTag()?.error
      ) {
        dispatchActionsBasedOnTag();
        setReLoadingData(true);
      }
    },
    [dispatchActionsBasedOnTag, getMoviesBasedOnTag, loadMoreMovies]
  );

  const handleLoadMoreMovies = useCallback(() => {
    setLoadMoreMovies(true);
  }, []);

  const isDataLoadedOrErrorOccured = useCallback(() => {
    if (getMoviesBasedOnTag()?.data.length || getMoviesBasedOnTag()?.error) {
      setLoadingData(false);
    } else if (
      getMoviesBasedOnTag()?.data.length ||
      getMoviesBasedOnTag()?.error
    ) {
      setLoadingData(false);
    } else if (
      getMoviesBasedOnTag()?.data.length ||
      getMoviesBasedOnTag()?.error
    ) {
      setLoadingData(false);
    } else if (
      getMoviesBasedOnTag()?.data.length ||
      getMoviesBasedOnTag()?.error
    ) {
      setLoadingData(false);
    }
  }, [getMoviesBasedOnTag]);

  const showLoading = () => {
    if (loadingData && !loadMoreMovies) {
      return true;
    } else if (!loadingData && reLoadingData && loadMoreMovies) {
      return true;
    }
    return false;
  };

  const navigateTo = (_, id) => {
    navigate(`/details/movies/${id}`);
  };

  React.useEffect(() => {
    setLoadMoreMovies(false);
  }, [tag]);

  React.useEffect(() => {
    const movies = getMoviesBasedOnTag();
    if (!movies.data.length) {
      dispatchActionsBasedOnTag();
      setLoadingData(true);
    }
  }, [tag, getMoviesBasedOnTag, dispatchActionsBasedOnTag]);

  React.useEffect(() => {
    isDataLoadedOrErrorOccured();
    setReLoadingData(false);
    const obersver = new IntersectionObserver(callbackFunction);
    const currentRef = moviesRef.current;
    if (currentRef) obersver.observe(currentRef);

    return () => {
      if (currentRef) obersver.unobserve(currentRef);
    };
  }, [
    loadingData,
    moviesRef,
    props.popularMovies,
    props.topRatedMovies,
    props.upcomingMovies,
    props.nowPlayingMovies,
    loadMoreMovies,
    callbackFunction,
    isDataLoadedOrErrorOccured,
  ]);

  return (
    <ViewHoc>
      <Box display="flex" justifyContent="center" mt="2em">
        <Box mb="1em" width={isMobileView ? "90vw" : "80vw"}>
          <Typography fontWeight="600" fontSize="26px">
            {getTypographyHeadingBaseOnTag(tag)}
          </Typography>
          <Box
            display="flex"
            width="100%"
            flexDirection={isMobileView ? "column" : "row"}
          >
            <Box p="1em" width={isMobileView ? "95%" : "20%"}>
              <SortFilterSearchComponent />
            </Box>

            <Box
              width={isMobileView ? "100%" : "80%"}
              mt="1em"
              ml={isMobileView ? "0em" : "2em"}
            >
              {!isMobileView ? (
                <Grid container spacing={2}>
                  {!loadingData &&
                    !getMoviesBasedOnTag()?.error &&
                    getMoviesBasedOnTag()?.data?.map((movie, index) => {
                      return (
                        <Grid item md={4} lg={3} xl={2} key={`${index}`}>
                          <CardComponent
                            isViewOnHome={false}
                            data={movie}
                            titleCategory="movies"
                            navigateTo={navigateTo}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              ) : (
                <Box>
                  {!loadingData &&
                    !getMoviesBasedOnTag()?.error &&
                    getMoviesBasedOnTag()?.data?.map((movies, index) => (
                      <Box key={`${index}`} mb="1em">
                        <CardListComponent
                          data={movies}
                          titleCategory="movies"
                          navigateTo={navigateTo}
                        />
                      </Box>
                    ))}
                </Box>
              )}
              {!loadMoreMovies &&
              !loadingData &&
              getMoviesBasedOnTag()?.data?.length ? (
                <ButtonComponent
                  buttonLabel={"Load More"}
                  onClick={handleLoadMoreMovies}
                />
              ) : null}
              {getMoviesBasedOnTag()?.error && (
                <ErrorComponent errorText={getMoviesBasedOnTag()?.error} />
              )}
              {showLoading() && !getMoviesBasedOnTag()?.error && (
                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  mt="1em"
                >
                  <Box width="20%">
                    <LoadingComponent />
                  </Box>
                </Box>
              )}
              <Box ref={moviesRef} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ViewHoc>
  );
};

export default Movies;
