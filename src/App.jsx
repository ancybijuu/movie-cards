
import { useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

function App() {

  const [watchlist, setWatchlist] = useState([]);
  const [message, setMessage] = useState("");

  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      date: "July 16, 2010",
      image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Adventure",
      date: "November 7, 2014",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      id: 3,
      title: "Avatar",
      genre: "Fantasy",
      date: "December 18, 2009",
      image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
      id: 4,
      title: "Joker",
      genre: "Drama",
      date: "October 4, 2019",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
      id: 5,
      title: "Titanic",
      genre: "Romance",
      date: "December 19, 1997",
      image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    }
  ];

  function addToWatchlist(movie) {

    const alreadyAdded = watchlist.some(
      (item) => item.id === movie.id
    );

    if (!alreadyAdded) {
      setWatchlist([...watchlist, movie]);
      setMessage(movie.title + " added to Watchlist!");
    }
  }

  return (
    <div className="app">

      <h1>🎬 My Movie Collection</h1>

      <div className="watchlist-count">
        My Watchlist: {watchlist.length} Movies
      </div>

      <p className="message">{message}</p>

      <div className="movie-container">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addToWatchlist={addToWatchlist}
            watchlist={watchlist}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
