import { connect } from "react-redux";
import { peopleActions } from "../../store/actions";
import { getPopularPeopleSelector } from "../../store/selectors/people.selectors";
import People from "./People";

const mapStateToProps = (state) => {
  return {
    popularPeople: getPopularPeopleSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularPeople: () => dispatch(peopleActions.getPopularPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
