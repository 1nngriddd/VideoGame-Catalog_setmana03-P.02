import "./GameCard.css";

function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <article className="game-card">
      <img src={game.image} alt={game.title} />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p className="genre">{game.genre}</p>
        <p className="year">{game.year}</p>
        <button
          className={isFavorite ? "fav-button remove" : "fav-button"}
          onClick={() => onToggleFavorite(game)}
        >
          {isFavorite ? "♥ Eliminar de favorits" : "♡ Afegir a favorits"}
        </button>
      </div>
    </article>
  );
}

export default GameCard;
