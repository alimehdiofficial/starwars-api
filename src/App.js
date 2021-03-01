import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CharacterScreen from "./screens/CharacterScreen";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { selectCharacter } from "./features/characterSlice";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";
import Footer from "./components/Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const character = useSelector(selectCharacter);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      let res = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json"
      );
      let data = await res.json();
      setCharacters(data);
      setLoading(false);
    }

    fetchCharacters();
  }, [character, setLoading]);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="#edec51" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Navbar />
            <HomeScreen characters={characters} />
            <Footer />
          </Route>
          <Route exact path="/character/:id">
            {character ? (
              <>
                <Header />
                <Navbar />
                <CharacterScreen />
                <Footer />
              </>
            ) : (
              <Redirect path="/" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: contain;
    height: 150px;
    margin-bottom: 40px;
    filter: brightness(0) invert(1);
  }
`;
