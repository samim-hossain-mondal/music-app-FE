import React from 'react';
import propTypes from 'prop-types';
import './Empty.css';

export default function Empty({clickHandler}) {
  return (
    <div className='empty-body'>
      <a>:((</a>
      <a>seems a bit empty in here...</a>
      <button className='sync-btn' onClick={clickHandler}>sync</button>
    </div>
  );
}
Empty.propTypes = {
  clickHandler: propTypes.func.isRequired,
};