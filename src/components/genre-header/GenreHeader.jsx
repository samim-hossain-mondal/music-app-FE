import React from 'react';
import propTypes from 'prop-types';
import Pop from '../../assets/genre-pop.png';
import Rock from '../../assets/genre-rock.png';
import Bollywood from '../../assets/genre-bollywood.png';
import Country from '../../assets/genre-country.png';
import './GenreHeader.css';

export default function GenreHeader({genre}) {
  
  //console.log(genre);
  return (
    <div className='genre-pop'>
      <div className='genre-pop-img-text'>
        <img className='pop-img' src={genre === 'Pop' ? Pop : genre === 'Rock' ? Rock : genre === 'Bollywood' ? Bollywood : Country} alt='popimg' />
        <a>{genre}</a>
      </div>
    </div>
  );
}
GenreHeader.propTypes = {
  genre: propTypes.string,
};