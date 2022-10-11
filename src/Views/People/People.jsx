import React, { useCallback } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { PeopleCard } from "../../components/PeopleCard";
import { ButtonComponent } from "../../components/ButtonComponent";
import { LoadingComponent } from "../../components/LoadingComponent";
import { ErrorComponent } from "../../components/ErrorComponent";
import { useNavigate } from "react-router-dom";
import { ViewHoc } from "../../components/ViewHoc";

const People = (props) => {
  const { popularPeople, getPopularPeople } = props;
  const navigate = useNavigate();
  const isMobileView = useMediaQuery("(max-width:900px)");
  const peopleRef = React.useRef(null);
  const [loadMorePeople, setLoadMorePeople] = React.useState(false);
  const [loadingData, setLoadingData] = React.useState(false);
  const [reLoadingData, setReLoadingData] = React.useState(false);

  const callbackFunction = useCallback(
    (entries) => {
      const { page, totalPages } = popularPeople.toJS();

      if (
        loadMorePeople &&
        entries[0].intersectionRatio > 0 &&
        page > 0 &&
        page < totalPages &&
        !popularPeople?.toJS()?.error
      ) {
        getPopularPeople();
        setReLoadingData(true);
      }
    },
    [getPopularPeople, popularPeople, loadMorePeople]
  );

  const handleLoadMorePeople = useCallback(() => {
    setLoadMorePeople(true);
  }, []);

  const navigateTo = (id) => {
    navigate(`/details/people/${id}`);
  };

  const showLoading = () => {
    if (loadingData && !loadMorePeople) {
      return true;
    } else if (!loadingData && reLoadingData && loadMorePeople) {
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    if (popularPeople?.toJS().data.length || popularPeople?.toJS().error) {
      setLoadingData(false);
    }

    const obersver = new IntersectionObserver(callbackFunction);
    const currentRef = peopleRef.current;
    if (currentRef) obersver.observe(currentRef);

    return () => {
      if (currentRef) obersver.unobserve(currentRef);
    };
  }, [loadingData, peopleRef, popularPeople, loadMorePeople, callbackFunction]);

  React.useEffect(() => {
    if (!popularPeople.toJS().data?.length) {
      getPopularPeople();
      setLoadingData(true);
    }
  }, [popularPeople, getPopularPeople]);

  return (
    <ViewHoc>
      <Box display="flex" alignItems="center" mt="2em" flexDirection="column">
        <Typography fontWeight="600" fontSize="26px" width="75%">
          Popular People
        </Typography>
        <Box mb="1em" mt="2em" width={isMobileView ? "90vw" : "80vw"}>
          <Grid container spacing={2} justifyContent="center" mb="1em">
            {!loadingData &&
              !popularPeople?.toJS().error &&
              popularPeople.toJS()?.data?.map((popularPeople, index) => (
                <Grid item md={4} lg={3} xl={2} key={`${index}`} mb="1em">
                  <PeopleCard
                    popularPeople={popularPeople}
                    navigateTo={navigateTo}
                  />
                </Grid>
              ))}
            {!loadMorePeople &&
            !loadingData &&
            !popularPeople?.toJS().error &&
            popularPeople.toJS()?.data?.length ? (
              <ButtonComponent
                buttonLabel={"Load More"}
                onClick={handleLoadMorePeople}
              />
            ) : null}
          </Grid>
          {popularPeople?.toJS()?.error && (
            <ErrorComponent errorText={popularPeople?.toJS()?.error} />
          )}
          {showLoading() && !popularPeople?.toJS()?.error && (
            <Box display="flex" justifyContent="center" width="100%" mt="1em">
              <Box width="20%">
                <LoadingComponent />
              </Box>
            </Box>
          )}
          <Box ref={peopleRef} />
        </Box>
      </Box>
    </ViewHoc>
  );
};

export default People;
