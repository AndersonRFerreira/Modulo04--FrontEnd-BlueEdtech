import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Main.scss";
import { Container } from "../../Components/Container/styled";
import ReadAll from "../ReadAll/ReadAll";
import Create from "../Create/Create";
import DeleteAll from "../DeleteAll/DeleteAll";
import About from "../About/About";
import ReadOne from "../ReadOne/ReadOne";
import { ThemeButton } from "../../Components/ThemeButton/styled";
import { GlobalStyles } from "../../Components/GlobalStyles/styled";
import { lightTheme, darkTheme } from "../../Components/Theme/styled";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function Main() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" exact component={ReadAll}></Route>
            <Route path="/create" component={Create}></Route>
            <Route path="/deleteall" component={DeleteAll}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/view/:id" component={ReadOne}></Route>
          </Switch>

          <ThemeButton className="im im-light-bulb" onClick={themeToggler}></ThemeButton>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
