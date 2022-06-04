import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return(
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Movies</h1>}
      <div>
        <ul>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <a href={movie.url}>
                    <h2>{movie.title}</h2>
                    <img src={movie.medium_cover_image} />
                  </a>
                  <p>{movie.summary}</p>
                  <ul>
                  {movie.genres.map(g => (
                    <li key={g}>{g}</li>)
                  )}
                  </ul>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
