
function MovieCard({ movie, addToWatchlist, watchlist }) {

  const isAdded = watchlist.some(
    (item) => item.id === movie.id
  );

  return (
    <div className="movie-card">

      <div className="poster-container">

        <img
          src={movie.image}
          alt={movie.title}
          className="movie-poster"
        />

        <span className="more-icon">•••</span>

      </div>

      <div className="movie-info">

        <h3>{movie.title}</h3>

        <p>{movie.date}</p>

        <p className="genre">{movie.genre}</p>

        <button
          onClick={() => addToWatchlist(movie)}
          disabled={isAdded}
        >
          {isAdded ? "Added to Watchlist" : "Add to Watchlist"}
        </button>

      </div>

    </div>
  );
}

export default MovieCard;
