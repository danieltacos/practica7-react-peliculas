import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMovie(null);
    setError(false);
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [movieId]);

  if (error) {
    return (
      <div className="detailsMessage">
        <p>No se pudo cargar la película.</p>
        <Link to="/" className="backButton">← Volver</Link>
      </div>
    );
  }

  if (!movie) return <p className="detailsMessage">Cargando información...</p>;

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsPage">
      <Link to="/" className="backButton">← Volver</Link>

      <div className="detailsContainer">
        <img src={imageUrl} alt={movie.title} className="movieImage" />

        <div className="movieDetails">
          <h2>{movie.title}</h2>
          <p>
            <strong>Géneros:</strong>{" "}
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>
          <p>
            <strong>Fecha de estreno:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Descripción:</strong>{" "}
            {movie.overview || "Sin descripción disponible."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;