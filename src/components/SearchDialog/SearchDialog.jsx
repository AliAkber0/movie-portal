import React from "react";
import {
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  useTheme,
  Typography,
  DialogContentText,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { CardListComponent } from "../CardListComponent";
import { SearchField } from "../SearchField";

const SearchDialog = (props) => {
  const theme = useTheme();

  const {
    closeDialogHander,
    data,
    searchValue,
    navigateTo,
    searchValueHandler,
    searchSubmitHandler,
    searchLoading,
  } = props;

  return (
    <Dialog
      open={true}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth="lg"
      sx={{ width: "100%" }}
    >
      <DialogTitle
        component="div"
        id="scroll-dialog-title"
        sx={{ background: `${theme.palette.primary.gradientColor}` }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography>Search Results</Typography>
          <CloseIcon
            onClick={() => closeDialogHander(false)}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
        </Box>
      </DialogTitle>
      <Box mt="1em">
        <SearchField
          searchValue={searchValue}
          isViewedOnHome={false}
          searchValueHandler={searchValueHandler}
          searchSubmitHandler={searchSubmitHandler}
          searchLoading={searchLoading}
        />
      </Box>

      {data.length ? (
        // <DialogContent dividers>
        <DialogContent id="scroll-dialog-description" tabIndex={-1}>
          {data?.map((title, index) => (
            <Box key={`${index}`} mb="1em">
              <CardListComponent
                data={title}
                titleCategory={title?.["media_type"]}
                navigateTo={navigateTo}
              />
            </Box>
          ))}
        </DialogContent>
      ) : (
        // </DialogContent>
        <DialogContentText sx={{ padding: "20px" }}>
          {`We didn't find anything the related to  "${searchValue}"`}
        </DialogContentText>
      )}
    </Dialog>
  );
};

export default SearchDialog;
