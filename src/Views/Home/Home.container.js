import Home from "./Home";
import { connect } from "react-redux";
import { getPopularMoviesSelector } from "../../store/selectors/movies.selectors";
import { getPopularTvShowsSelector } from "../../store/selectors/tvShows.selectors";
import { moviesActions, trendingActions } from "../../store/actions";
import { tvShowsActions } from "../../store/actions";
import { searchActions } from "../../store/actions";
import {
  getTrendingTodaySelector,
  getTrendingWeekSelector,
} from "../../store/selectors/trending.selector";
import { getSearchSelector } from "../../store/selectors/search.selectors";

const mapStateToProps = (state) => {
  return {
    popularMovies: getPopularMoviesSelector(state),
    popularTvShows: getPopularTvShowsSelector(state),
    trendingToday: getTrendingTodaySelector(state),
    trendingWeek: getTrendingWeekSelector(state),
    searchResult: getSearchSelector(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(moviesActions.getPopularMovies()),
    getPopularTvShows: () => dispatch(tvShowsActions.getPopularTvShows()),
    getTrendingToday: () => dispatch(trendingActions.getTrendingToday()),
    getTrendingWeek: () => dispatch(trendingActions.getTrendingWeek()),
    getSearchResult: (searchValue) =>
      dispatch(searchActions.getSearch(searchValue)),
    clearSearchResult: () => dispatch(searchActions.clearSearchResult()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
