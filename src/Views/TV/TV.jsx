import React, { useCallback } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { SortFilterSearchComponent } from "../../components/SortFilterSearchComponent";
import { CardComponent } from "../../components/CardComponent";
import { CardListComponent } from "../../components/CardListComponent";
import { getTypographyHeadingBaseOnTag } from "../../Utils/ViewsUtility";
import { useNavigate, useParams } from "react-router-dom";
import { ViewHoc } from "../../components/ViewHoc";
import { ButtonComponent } from "../../components/ButtonComponent";
import { ErrorComponent } from "../../components/ErrorComponent";
import { LoadingComponent } from "../../components/LoadingComponent";

const TV = (props) => {
  const navigate = useNavigate();
  const { tag } = useParams();
  const isMobileView = useMediaQuery("(max-width:900px)");
  const tvShowsRef = React.useRef(null);
  const [loadMoreTvShows, setLoadMoreTvShows] = React.useState(false);
  const [loadingData, setLoadingData] = React.useState(false);
  const [reLoadingData, setReLoadingData] = React.useState(false);

  const dispatchActionsBasedOnTag = useCallback(() => {
    if (tag === "popular") {
      props.getPopularTvShows();
    } else if (tag === "airingtoday") {
      props.getAiringTodayTvShows();
    } else if (tag === "ontv") {
      props.getOnAiredTvShows();
    } else if (tag === "toprated") {
      props.getTopRatedTvShows();
    }
  }, [props, tag]);

  const getTvShowsBasedOnTag = useCallback(() => {
    if (tag === "popular") {
      const { popularTvShows } = props;
      return popularTvShows.toJS();
    } else if (tag === "airingtoday") {
      const { airingTodayTvShows } = props;
      return airingTodayTvShows.toJS();
    } else if (tag === "ontv") {
      const { onAiredTvShows } = props;
      return onAiredTvShows.toJS();
    } else if (tag === "toprated") {
      const { topRatedTvShows } = props;
      return topRatedTvShows.toJS();
    }
    return null;
  }, [props, tag]);

  const callbackFunction = useCallback(
    (entries) => {
      const tvShows = getTvShowsBasedOnTag();
      const { page, totalPages } = tvShows;

      if (
        loadMoreTvShows &&
        entries[0].intersectionRatio > 0 &&
        page > 0 &&
        page < totalPages &&
        !getTvShowsBasedOnTag()?.error
      ) {
        dispatchActionsBasedOnTag();
        setReLoadingData(true);
      }
    },
    [dispatchActionsBasedOnTag, getTvShowsBasedOnTag, loadMoreTvShows]
  );

  const handleLoadMoreTvShows = () => {
    setLoadMoreTvShows(true);
  };

  const isDataLoadedOrErrorOccured = useCallback(() => {
    if (getTvShowsBasedOnTag()?.data.length || getTvShowsBasedOnTag()?.error) {
      setLoadingData(false);
    } else if (
      getTvShowsBasedOnTag()?.data.length ||
      getTvShowsBasedOnTag()?.error
    ) {
      setLoadingData(false);
    } else if (
      getTvShowsBasedOnTag()?.data.length ||
      getTvShowsBasedOnTag()?.error
    ) {
      setLoadingData(false);
    } else if (
      getTvShowsBasedOnTag()?.data.length ||
      getTvShowsBasedOnTag()?.error
    ) {
      setLoadingData(false);
    }
  }, [getTvShowsBasedOnTag]);

  const showLoading = () => {
    if (loadingData && !loadMoreTvShows) {
      return true;
    } else if (!loadingData && reLoadingData && loadMoreTvShows) {
      return true;
    }
    return false;
  };

  const navigateTo = (_, id) => {
    navigate(`/details/tv/${id}`);
  };

  React.useEffect(() => {
    setLoadMoreTvShows(false);
  }, [tag]);

  React.useEffect(() => {
    const tvShows = getTvShowsBasedOnTag();
    if (!tvShows.data.length) {
      dispatchActionsBasedOnTag();
      setLoadingData(true);
    }
  }, [tag, dispatchActionsBasedOnTag, getTvShowsBasedOnTag]);

  React.useEffect(() => {
    isDataLoadedOrErrorOccured();
    setReLoadingData(true);

    const obersver = new IntersectionObserver(callbackFunction);
    const currentRef = tvShowsRef.current;
    if (currentRef) obersver.observe(currentRef);

    return () => {
      if (currentRef) obersver.unobserve(currentRef);
    };
  }, [
    tvShowsRef,
    loadingData,
    props.popularTvShows,
    props.topRatedTvShows,
    props.airingTodayTvShows,
    props.onAiredTvShows,
    loadMoreTvShows,
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
                    !getTvShowsBasedOnTag()?.error &&
                    getTvShowsBasedOnTag()?.data?.map((tvShows, index) => {
                      return (
                        <Grid item md={4} lg={3} xl={2} key={`${index}`}>
                          <CardComponent
                            isViewOnHome={false}
                            data={tvShows}
                            titleCategory="tv"
                            navigateTo={navigateTo}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              ) : (
                <Box>
                  {!loadingData &&
                    !getTvShowsBasedOnTag()?.error &&
                    getTvShowsBasedOnTag()?.data?.map((tvShows, index) => (
                      <Box key={`${index}`} mb="1em">
                        <CardListComponent data={tvShows} titleCategory="tv" />
                      </Box>
                    ))}
                </Box>
              )}
              {!loadingData &&
              !loadMoreTvShows &&
              getTvShowsBasedOnTag()?.data?.length ? (
                <ButtonComponent
                  buttonLabel={"Load More"}
                  onClick={handleLoadMoreTvShows}
                />
              ) : null}
              {getTvShowsBasedOnTag()?.error && (
                <ErrorComponent errorText={getTvShowsBasedOnTag()?.error} />
              )}
              {showLoading() && !getTvShowsBasedOnTag()?.error && (
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
              <Box ref={tvShowsRef} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ViewHoc>
  );
};

export default TV;
