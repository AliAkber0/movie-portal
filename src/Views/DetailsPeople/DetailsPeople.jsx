import React from "react";

import { useMediaQuery, Box, Typography, Card, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import { LoadingComponent } from "../../components/LoadingComponent";
import moment from "moment/moment";
import { ErrorComponent } from "../../components/ErrorComponent";
import { ViewHoc } from "../../components/ViewHoc";

const DetailsPeople = (props) => {
  const { id } = useParams();
  const { details, getDetails, clearDetails } = props;
  const isMobileView = useMediaQuery("(max-width:900px)");
  const textAlign = isMobileView ? "center" : "left";

  React.useEffect(() => {
    getDetails(id);
    return () => {
      clearDetails();
    };
  }, [getDetails, clearDetails, id]);

  if (details?.toJS().error) {
    return (
      <ViewHoc>
        <Box width="100%" mt="3em">
          <ErrorComponent errorText={details?.toJS().error} />
        </Box>
      </ViewHoc>
    );
  }
  if (Object.keys(details?.toJS().data || {}).length === 0) {
    return (
      <ViewHoc>
        <Box display="flex" justifyContent="center" mt="3em">
          <Box width="30%">
            <LoadingComponent />
          </Box>
        </Box>
      </ViewHoc>
    );
  }
  return (
    <ViewHoc>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: `${isMobileView ? "column" : "row"}`,
          alignItems: `${isMobileView ? "center" : "normal"}`,
          paddingTop: "2em",
          minHeight: "500px",
        }}
      >
        <Box display="flex" justifyContent="flex-end" width="35%">
          <Card sx={{ maxWidth: 300, maxHeight: 450 }}>
            <CardMedia
              component="img"
              image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${
                details?.toJS()?.data?.["profile_path"] ||
                "83o3koL82jt30EJ0rz4Bnzrt2dd.jpg"
              }`}
              alt="image"
            />
          </Card>
        </Box>
        <Box
          color="white"
          ml={isMobileView ? "0em" : "3em"}
          width={isMobileView ? "100%" : "65%"}
          display="flex"
          alignItems={isMobileView ? "center" : "normal"}
          flexDirection="column"
        >
          <Box mt="1em">
            <Typography fontSize="35px" fontWeight="600" color="black">
              {details?.toJS()?.data?.name}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent={isMobileView ? "center" : "normal"}
          >
            <Box width="90%" mt="1.5em">
              <Typography
                fontSize="22px"
                fontWeight="600"
                textAlign={textAlign}
                color="black"
              >
                Biography
              </Typography>
              <Typography
                fontSize="16px"
                textAlign={textAlign}
                color="black"
                mt="1em"
              >
                {details?.toJS()?.data?.biography}
              </Typography>
            </Box>
          </Box>
          <Box
            mt="1em"
            mb="1em"
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="center"
            alignItems={isMobileView ? "center" : "flex-start"}
            textAlign="center"
          >
            <Typography
              color="black"
              fontWeight="600"
              mt={isMobileView && "1em"}
            >
              Date of Birth
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography color="black">{`${moment(
                details?.toJS()?.data.birthday,
                "YYYY-MM-DD"
              ).format("MMM DD, YYYY")} `}</Typography>

              <Typography
                color="black"
                ml="5px"
                fontSize="16px"
              >{`(${moment().diff(
                details?.toJS()?.data.birthday,
                "years"
              )} years old)`}</Typography>
            </Box>

            <Typography
              color="black"
              fontWeight="600"
              mt={isMobileView ? "1em" : "1em"}
            >
              Place of Birth
            </Typography>
            <Typography color="black" fontSize="16px">
              {details?.toJS()?.data?.place_of_birth}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ViewHoc>
  );
};

export default DetailsPeople;
