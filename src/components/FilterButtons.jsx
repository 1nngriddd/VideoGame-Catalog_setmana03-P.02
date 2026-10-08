import "./FilterButtons.css";

function FilterButtons({ genres, decades, selectedGenre, selectedDecade, onGenreChange, onDecadeChange }) {
  return (
    <section className="filters">
      <div className="filter-group">
        <h3>Gènere</h3>
        <div className="buttons">
          <button
            className={selectedGenre === "Tots" ? "active" : ""}
            onClick={() => onGenreChange("Tots")}
          >
            Tots
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              className={selectedGenre === genre ? "active" : ""}
              onClick={() => onGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Any</h3>
        <div className="buttons">
          <button
            className={selectedDecade === "Tots" ? "active" : ""}
            onClick={() => onDecadeChange("Tots")}
          >
            Tots
          </button>
          {decades.map((decade) => (
            <button
              key={decade}
              className={selectedDecade === decade ? "active" : ""}
              onClick={() => onDecadeChange(decade)}
            >
              {decade} - {decade + 9}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilterButtons;
