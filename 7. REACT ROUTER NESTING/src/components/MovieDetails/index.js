import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails({movies}) {
  const { movieId } = useParams();
  const movieChoice = movies.find(movie => movie.id === Number(movieId));

  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
