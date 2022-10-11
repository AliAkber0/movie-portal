import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { HeroSection } from "../../components/HeroSection";
import { MoviesOrTvShowsSection } from "../../components/MoviesOrTvShowsSection";
import { ViewHoc } from "../../components/ViewHoc";
import { SearchDialog } from "../../components/SearchDialog";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  const {
    popularMovies,
    popularTvShows,
    trendingToday,
    trendingWeek,
    getPopularMovies,
    getPopularTvShows,
    getTrendingToday,
    getTrendingWeek,
    searchResult,
    getSearchResult,
    clearSearchResult,
  } = props;

  const isMobileView = useMediaQuery("(max-width:900px)");
  const [popularToggleState, setPopularToggleState] = React.useState("movies");
  const [trendingToggleState, setTrendingToggleState] = React.useState("today");
  const [popularLoading, setPopularLoading] = React.useState(false);
  const [trendingLoading, setTrendingLoading] = React.useState(false);
  const [showSearchDialog, setShowSearchDialog] = React.useState(false);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [searchReloading, setSearchReloading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const toggleButtonHandler = (toggleName, newToggleState) => {
    if (toggleName === "popular") {
      newToggleState !== popularToggleState &&
        setPopularToggleState(newToggleState);
    } else {
      newToggleState !== trendingToggleState &&
        setTrendingToggleState(newToggleState);
    }
  };

  const dispatchSearchHandler = (value) => {
    if (value) {
      if (!showSearchDialog) {
        setSearchLoading(true);
      } else {
        setSearchReloading(true);
      }
    }
    getSearchResult(value);
  };

  const searchSubmitHandler = (key, submitType) => {
    if (key === "Enter" && searchValue) {
      dispatchSearchHandler(searchValue);
    } else if (submitType === "buttonClick" && searchValue && !key) {
      dispatchSearchHandler(searchValue);
    }
  };

  const searchValueHandler = ({ target }) => {
    setSearchValue(target.value);
    dispatchSearchHandler(target.value);
  };

  const closeDialogHander = () => {
    setShowSearchDialog(false);
    setSearchValue("");
    clearSearchResult();
  };
  const navigateTo = (titleCategory, id) => {
    if (titleCategory === "tv") {
      navigate(`/details/tv/${id}`);
    } else if (["movie", "movies"].includes(titleCategory)) {
      navigate(`/details/movies/${id}`);
    } else {
      navigate(`/details/people/${id}`);
    }
  };

  React.useEffect(() => {
    if (!popularMovies?.toJS()?.data?.length) {
      setPopularLoading(true);
      getPopularMovies();
    }
    if (!popularTvShows?.toJS()?.data?.length) {
      setPopularLoading(true);
      getPopularTvShows();
    }

    if (!trendingToday?.toJS()?.data?.length) {
      setTrendingLoading(true);
      getTrendingToday();
    }
    if (!trendingWeek?.toJS()?.data?.length) {
      setTrendingLoading(true);
      getTrendingWeek();
    }
  }, [
    popularToggleState,
    trendingToggleState,
    trendingWeek,
    getPopularMovies,
    getPopularTvShows,
    getTrendingToday,
    getTrendingWeek,
    popularMovies,
    popularTvShows,
    trendingToday,
  ]);

  React.useEffect(() => {
    return () => {
      clearSearchResult();
    };
  }, [clearSearchResult]);

  React.useEffect(() => {
    if (
      (popularMovies.toJS().data?.length || popularMovies.toJS()?.error) &&
      (popularTvShows.toJS().data?.length || popularTvShows.toJS()?.error)
    ) {
      setPopularLoading(false);
    }
    if (
      (trendingToday.toJS().data?.length || trendingToday.toJS()?.error) &&
      (trendingWeek.toJS().data?.length || trendingWeek.toJS()?.error)
    ) {
      setTrendingLoading(false);
    }
    if (
      showSearchDialog &&
      (searchResult.toJS().error ||
        searchResult.toJS().page ||
        searchResult?.toJS()?.data.length !== 0)
    ) {
      setSearchReloading(false);
    }

    if (
      searchLoading &&
      !showSearchDialog &&
      (searchResult.toJS().error ||
        searchResult.toJS().page ||
        searchResult?.toJS()?.data.length !== 0)
    ) {
      setSearchLoading(false);
      setShowSearchDialog(true);
    }
  }, [
    showSearchDialog,
    trendingToday,
    trendingWeek,
    popularMovies,
    popularTvShows,
    trendingLoading,
    popularLoading,
    searchResult,
    searchLoading,
  ]);

  return (
    <ViewHoc>
      {showSearchDialog && (
        <SearchDialog
          closeDialogHander={closeDialogHander}
          error={searchResult.toJS()?.error}
          data={searchResult.toJS().data}
          page={searchResult.toJS().page}
          totalPages={searchResult.toJS().totalPages}
          searchValue={searchValue}
          navigateTo={navigateTo}
          searchValueHandler={searchValueHandler}
          searchSubmitHandler={searchSubmitHandler}
          searchLoading={searchReloading}
        />
      )}
      <Box display="flex" justifyContent="center">
        <Box mb="1em">
          <HeroSection
            isMobileView={isMobileView}
            fontColorSx={{ color: "white" }}
            searchValue={searchValue}
            searchValueHandler={searchValueHandler}
            searchLoading={searchLoading}
            searchSubmitHandler={searchSubmitHandler}
          />
          <Box mt="2em">
            <MoviesOrTvShowsSection
              dataPopularOrTrending={
                popularToggleState === "movies"
                  ? popularMovies?.toJS()
                  : popularTvShows?.toJS()
              }
              isMobileView={isMobileView}
              toggleButtonNames={["Movies", "Tv Shows"]}
              sectionHeading={"What's Popular"}
              toggleButtonHandler={toggleButtonHandler}
              toggleButtonState={popularToggleState}
              toggleName="popular"
              loadingData={popularLoading}
              navigateTo={navigateTo}
            />
          </Box>
          <Box mt="2em">
            <MoviesOrTvShowsSection
              loadingData={trendingLoading}
              dataPopularOrTrending={
                trendingToggleState === "today"
                  ? trendingToday?.toJS()
                  : trendingWeek?.toJS()
              }
              isMobileView={isMobileView}
              toggleButtonNames={["today", "This Week"]}
              sectionHeading={"Trending"}
              toggleButtonHandler={toggleButtonHandler}
              toggleButtonState={trendingToggleState}
              toggleName="trending"
              navigateTo={navigateTo}
            />
          </Box>
        </Box>
      </Box>
    </ViewHoc>
  );
};

export default Home;
