import * as React from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as Logo } from "../../assets/SVG/logo.svg";
import { ReactComponent as MobileLogo } from "../../assets/SVG/logoMobile.svg";

const drawerWidth = "75vw";

const navItems = ["Movies", "Tv Shows", "People"];
const navMoviesMenuItem = ["Popular", "Now Playing", "Upcoming", "Top Rated"];
const navTvShowsMenuItem = ["Popular", "Airing Today", "On TV", "Top Rated"];
const navPeopleMenuItem = ["Popular People"];
const listItemButtonSx = {
  ml: 1,
  "&.MuiButtonBase-root:hover": {
    bgcolor: "transparent",
  },
};
const listItemTextColorSx = { color: "white" };

const DrawerAppBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openMoviesMenu, setOpenMoviesMenu] = React.useState(false);
  const [openTvShowsMenu, setOpenTvShowsMenu] = React.useState(false);
  const [openPeopleMenu, setOpenPeopleMenu] = React.useState(false);
  const [collapseListToOpen, setCollapseListToOpen] = React.useState("none");
  const trigger = useScrollTrigger();
  const isMobileView = useMediaQuery("(max-width:900px)");

  React.useEffect(() => {
    resetAllMenuState();
  }, [isMobileView]);

  const menuToggleHandler = (menuToHandle) => {
    if (menuToHandle === "movies") {
      setOpenMoviesMenu(!openMoviesMenu);
    } else if (menuToHandle === "tvshows") {
      setOpenTvShowsMenu(!openTvShowsMenu);
    } else if (menuToHandle === "people") {
      setOpenPeopleMenu(!openPeopleMenu);
    }
  };

  const closeMenuHandler = () => {
    resetAllMenuState();
  };

  const getMenuItems = (menuToHandle = collapseListToOpen) => {
    if (menuToHandle === "movies") {
      if (!mobileOpen) {
        return navMoviesMenuItem.map((movieItem) => (
          <MenuItem /* onClick={handleClose} */ key={movieItem}>
            {movieItem}
          </MenuItem>
        ));
      }
      return navMoviesMenuItem.map((movieItem) => (
        <List key={movieItem} component="div" disablePadding>
          <ListItemButton sx={{ ...listItemButtonSx, pl: 4 }}>
            <ListItemText
              primary={movieItem}
              sx={{
                ...listItemTextColorSx,
                fontSize: "14px",
              }}
            />
          </ListItemButton>
        </List>
      ));
    } else if (menuToHandle === "tvshows") {
      if (!mobileOpen) {
        return navTvShowsMenuItem.map((tvShowItem) => (
          <MenuItem /* onClick={handleClose} */ key={tvShowItem}>
            {tvShowItem}
          </MenuItem>
        ));
      }
      return navTvShowsMenuItem.map((tvShowItem) => (
        <List key={tvShowItem} component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={tvShowItem}
              sx={{ ...listItemTextColorSx, fontSize: "14px" }}
            />
          </ListItemButton>
        </List>
      ));
    } else if (menuToHandle === "people") {
      if (!mobileOpen) {
        return navPeopleMenuItem.map((peopleItem) => (
          <MenuItem /* onClick={handleClose} */ key={peopleItem}>
            {peopleItem}
          </MenuItem>
        ));
      }
      return navPeopleMenuItem.map((peopleItem) => (
        <List key={peopleItem} component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={peopleItem}
              sx={{ ...listItemTextColorSx, fontSize: "14px" }}
            />
          </ListItemButton>
        </List>
      ));
    }
    return null;
  };

  const resetAllMenuState = () => {
    setOpenMoviesMenu(false);
    setOpenTvShowsMenu(false);
    setOpenPeopleMenu(false);
    setCollapseListToOpen("none");
  };

  const getMenuState = (menuToHandle) => {
    // console.log(menuToHandle, "menuToHandle");
    if (menuToHandle === "movies") {
      return openMoviesMenu;
    } else if (menuToHandle === "tvshows") {
      return openTvShowsMenu;
    }
    return openPeopleMenu;
  };

  const getItemWithoutSpacesAndLowerCase = (item) => {
    return item.replace(/\s/g, "").toLowerCase();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ width: "max-content" }}>
      {navItems.map((item) => {
        const itemRemoveSpacesAndLowerCase =
          getItemWithoutSpacesAndLowerCase(item);
        return (
          <Box key={item}>
            <ListItem disablePadding>
              <ListItemButton
                sx={listItemButtonSx}
                disableRipple
                disableTouchRipple
                onClick={() => {
                  setCollapseListToOpen(itemRemoveSpacesAndLowerCase);
                  menuToggleHandler(itemRemoveSpacesAndLowerCase);
                }}
              >
                <ListItemText primary={item} sx={listItemTextColorSx} />
              </ListItemButton>
            </ListItem>
            {collapseListToOpen === itemRemoveSpacesAndLowerCase && (
              <Collapse in={true} timeout="auto" unmountOnExit>
                {getMenuItems()}
              </Collapse>
            )}
          </Box>
        );
      })}
    </List>
  );
  // console.log(mobileOpen, "mobileOpen");
  return (
    <Box sx={{ height: { xs: "56px", sm: "64px" } }}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box display="flex" flex="1" />

            {isMobileView ? (
              <MobileLogo height="40px" />
            ) : (
              <Logo height="30px" width="140px" />
            )}
            <Box
              flex="4"
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Box display="flex" sx={{ ml: "2em" }}>
                {navItems.map((item) => {
                  const itemRemoveSpacesAndLowerCase =
                    getItemWithoutSpacesAndLowerCase(item);
                  return (
                    <Box key={item}>
                      <Button
                        sx={{ color: "#fff", ml: "2em", fontWeight: 600 }}
                        disableRipple
                        onMouseEnter={(e) => {
                          console.log("onMouse Enter");
                          setAnchorEl(e.currentTarget);
                          menuToggleHandler(itemRemoveSpacesAndLowerCase);
                        }}
                        onMouseLeave={() => {
                          console.log("onMouse Out");
                        }}
                      >
                        {item}
                      </Button>
                      <Menu
                        open={
                          !isMobileView
                            ? getMenuState(itemRemoveSpacesAndLowerCase)
                            : false
                        }
                        onClose={closeMenuHandler}
                        anchorEl={anchorEl}
                        sx={{
                          "& .MuiMenuItem-root": {
                            paddingLeft: "25px",
                            paddingRight: "25px",
                          },
                        }}
                      >
                        {getMenuItems(itemRemoveSpacesAndLowerCase)}
                      </Menu>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box display="flex" flex="1" />
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { md: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#032541",
            boxSizing: "border-box",
            width: drawerWidth,
            marginTop: { xs: "56px", sm: "64px" },
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DrawerAppBar;
