import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);

	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();

		setLoading(false);
		setMovie(json.data.movie);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div>
			<h1>{loading ? "Loading..." : `Detail of the ${movie.title}`}</h1>

			<Movie
				id={movie.id}
				coverImg={movie.medium_cover_image}
				title={movie.title}
				summary={movie.description_full}
				genres={movie.genres || ["Here is no Genres"]}
			/>

			<Link to="/">
				<button>Back to Home</button>
			</Link>
		</div>
	);
}

export default Detail;
