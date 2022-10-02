import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordianBoxShadowSx = {
  "&.MuiAccordion-root": {
    boxShadow: "0 2px 8px rgb(0 0 0 / 35%)",
    border: "1px solid #e3e3e3",
  },
};

const SortFilterSearchComponent = () => {
  return (
    <Box>
      <Box mb="1em">
        <Accordion sx={AccordianBoxShadowSx}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Sort</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize="14px">Sort Results</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mb="1em">
        <Accordion sx={AccordianBoxShadowSx}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize="14px">Filter Titles</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box mb="1em">
        <Accordion sx={AccordianBoxShadowSx}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Where To Watch</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize="14px">My Services</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default SortFilterSearchComponent;
