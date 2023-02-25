import React from 'react';
import propTypes from 'prop-types';
import LikeButton from '../likeButton/like';
import './Card.css';

export default function Card({id, name, image, genre_name}) {
  return (
    <div className='card'>
      <img src={image} alt='album' />
      <div className='card-body'>
        <div className='card-left'>
          <a>{name}</a>
          <f><b>{genre_name}</b></f>
        </div>
        <LikeButton id={id} />
      </div>
    </div>
  );
}
Card.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  image: propTypes.string,
  genre_name: propTypes.string,
};
