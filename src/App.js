import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Views/Movies";
import React from "react";
import "./App.css";
import Home from "./Views/Home";
import Details from "./Views/Details";
import TV from "./Views/TV";
import People from "./Views/People";
import DetailsPeople from "./Views/DetailsPeople";

const theme = createTheme({
  palette: {
    primary: {
      main: "#032541",
      gradientColor:
        "linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%)",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "cursive"].join(","),
    fontSize: 16,
  },
});

function App() {
  // React.useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:tag/:id" element={<Details />} />
          <Route path="/details/people/:id" element={<DetailsPeople />} />
          <Route path="/movie/:tag" element={<Movies />} />
          <Route path="/tv/:tag" element={<TV />} />
          <Route path="/people/:tag" element={<People />} />
          <Route
            path="*"
            element={<div className="not-found">Page Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
