import GameCard from "./GameCard";
import "./GameList.css";

function GameList({ games, favorites, onToggleFavorite, emptyMessage }) {
  if (games.length === 0) {
    return <p className="empty">{emptyMessage}</p>;
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isFavorite={favorites.some((fav) => fav.id === game.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default GameList;
