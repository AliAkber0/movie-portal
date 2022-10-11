import { connect } from "react-redux";
import { detailsActions } from "../../store/actions";
import { getDetailsSelector } from "../../store/selectors/details.selectors";
import DetailsPeople from "./DetailsPeople";

const mapStateToProps = (state) => {
  return {
    details: getDetailsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (id) => dispatch(detailsActions.getDetails(id)),
    clearDetails: () => dispatch(detailsActions.clearDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPeople);
