import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeContainer } from "./Views/Home";
import "./App.css";
import { MovieContainer } from "./Views/Movie";
import { TVContainer } from "./Views/TV";
import { PeopleContainer } from "./Views/People";

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/movie/:tag" element={<MovieContainer />} />
          <Route path="/tv/:tag" element={<TVContainer />} />
          <Route path="/people/:tag" element={<PeopleContainer />} />
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
