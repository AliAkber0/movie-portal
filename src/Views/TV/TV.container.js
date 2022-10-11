import { connect } from "react-redux";
import TV from "./TV";
import {
  getAiringTodayTvShowsSelector,
  getOnAiredTvShowsSelector,
  getPopularTvShowsSelector,
  getTopRatedTvShowsSelector,
} from "../../store/selectors/tvShows.selectors";
import { tvShowsActions } from "../../store/actions";

const mapStateToProps = (state) => {
  return {
    popularTvShows: getPopularTvShowsSelector(state),
    airingTodayTvShows: getAiringTodayTvShowsSelector(state),
    onAiredTvShows: getOnAiredTvShowsSelector(state),
    topRatedTvShows: getTopRatedTvShowsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularTvShows: () => dispatch(tvShowsActions.getPopularTvShows()),
    getAiringTodayTvShows: () =>
      dispatch(tvShowsActions.getAiringTodayTvShows()),
    getTopRatedTvShows: () => dispatch(tvShowsActions.getTopRatedTvShows()),
    getOnAiredTvShows: () => dispatch(tvShowsActions.getOnAiredTvShows()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TV);
