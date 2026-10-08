import { useState } from "react";
import games from "./data/games";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import GameList from "./components/GameList";
import Footer from "./components/Footer";
import "./App.css";

const genres = games
  .map((game) => game.genre)
  .filter((genre, index, all) => all.indexOf(genre) === index);

const decades = [1980, 1990, 2000, 2010, 2020];

function App() {
  const [selectedGenre, setSelectedGenre] = useState("Tots");
  const [selectedDecade, setSelectedDecade] = useState("Tots");
  const [favorites, setFavorites] = useState([]);

  const filteredGames = games.filter((game) => {
    const matchesGenre = selectedGenre === "Tots" || game.genre === selectedGenre;
    const matchesDecade =
      selectedDecade === "Tots" ||
      (game.year >= selectedDecade && game.year <= selectedDecade + 9);
    return matchesGenre && matchesDecade;
  });

  const addFavorite = (game) => {
    const alreadyFavorite = favorites.some((fav) => fav.id === game.id);
    if (!alreadyFavorite) {
      setFavorites([...favorites, game]);
    }
  };

  const removeFavorite = (game) => {
    setFavorites(favorites.filter((fav) => fav.id !== game.id));
  };

  const toggleFavorite = (game) => {
    const isFavorite = favorites.some((fav) => fav.id === game.id);
    if (isFavorite) {
      removeFavorite(game);
    } else {
      addFavorite(game);
    }
  };

  return (
    <div className="app">
      <Header />

      <main>
        <FilterButtons
          genres={genres}
          decades={decades}
          selectedGenre={selectedGenre}
          selectedDecade={selectedDecade}
          onGenreChange={setSelectedGenre}
          onDecadeChange={setSelectedDecade}
        />

        <section>
          <h2>CATÀLEG ({filteredGames.length})</h2>
          <GameList
            games={filteredGames}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            emptyMessage="No hi ha cap videojoc que coincideixi amb els filtres."
          />
        </section>

        <section>
          <h2>ELS MEUS FAVORITS ({favorites.length})</h2>
          <GameList
            games={favorites}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            emptyMessage="Encara no has afegit cap videojoc a favorits."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
