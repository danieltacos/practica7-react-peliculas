import { useParams } from "react-router-dom";

function MovieDetails() {
  const { movieId } = useParams();

  return (
    <div>
      <p>Detalle de la película con id: {movieId}</p>
    </div>
  );
}

export default MovieDetails;