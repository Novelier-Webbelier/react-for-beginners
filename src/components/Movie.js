import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, title, coverImg, summary, genres }) {
	return (
		<div key={id}>
			<Link to="/movie">
				<h2>{title}</h2>
			</Link>
			<img src={coverImg} alt={title} />
			<p>{summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
