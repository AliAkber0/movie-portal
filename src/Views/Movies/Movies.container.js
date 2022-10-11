import { connect } from "react-redux";
import Movies from "./Movies";
import {
  getPopularMoviesSelector,
  getTopRatedMoviesSelector,
  getUpcomingMoviesSelector,
  getNowPlayingMoviesSelector,
} from "../../store/selectors/movies.selectors";
import { moviesActions } from "../../store/actions";

const mapStateToProps = (state) => {
  return {
    popularMovies: getPopularMoviesSelector(state),
    upcomingMovies: getUpcomingMoviesSelector(state),
    topRatedMovies: getTopRatedMoviesSelector(state),
    nowPlayingMovies: getNowPlayingMoviesSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(moviesActions.getPopularMovies()),
    getUpcomingMovies: () => dispatch(moviesActions.getUpcomingMovies()),
    getTopRatedMovies: () => dispatch(moviesActions.getTopRatedMovies()),
    getNowPlayingMovies: () => dispatch(moviesActions.getNowPlayingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
