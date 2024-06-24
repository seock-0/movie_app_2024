import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

function Moive({ title, year, summary, poster }) {
  return (
    <div class="movie__data">
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year">{year}</h5>
      <p class="movie__summary">{summary}</p>
    </div>
  );
}

Moive.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Moive;
