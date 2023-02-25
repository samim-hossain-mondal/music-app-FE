import React from 'react';
import propTypes from 'prop-types';
import popimg from '../../assets/genre-pop.png';
import './GenreHeader.css';

export default function GenreHeader({genre}) {
  //console.log(genre);
  return (
    <div className='genre-pop'>
      <div className='genre-pop-img-text'>
        <img className='pop-img' src={popimg} alt='popimg' />
        <a>{genre}</a>
      </div>
    </div>
  );
}
GenreHeader.propTypes = {
  genre: propTypes.string,
};