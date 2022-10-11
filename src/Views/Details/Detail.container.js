import { connect } from "react-redux";
import { detailsActions } from "../../store/actions";
import { getDetailsSelector } from "../../store/selectors/details.selectors";
import Details from "./Details";

const mapStateToProps = (state) => {
  return {
    details: getDetailsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (titleId, tag) =>
      dispatch(detailsActions.getDetails(titleId, tag)),
    clearDetails: () => dispatch(detailsActions.clearDetails()),
    getDetailsReviews: (titleId, tag) =>
      dispatch(detailsActions.getDetailsReviews(titleId, tag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
