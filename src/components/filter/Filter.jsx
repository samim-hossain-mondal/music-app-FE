import React from 'react';
import propTypes from 'prop-types';
import Card from '../card/Card';

export default function Filter({genre, allSongs}) {
  const filteredSongs = allSongs.filter((song) => song.genre.name === genre);
  return (
    <div className='genre-card-container'>
      <div className='card-container' style={{margin: 0}}>
        {filteredSongs.map((song, index) => (
          <div key={index}>
            {index % 2 === 0 ? 
              (<div className='card-even'>
                <Card
                  key={song.id}
                  id={song.id}
                  name={song.name}
                  image={song.imageUrl}
                  artist_id={song.artist.id}
                  artist_name={song.artist.name}
                  genre_id={song.genre.id}
                  genre_name={song.genre.name}
                />
              </div>)
              :
              (<div className='card-odd'>
                <Card
                  key={song.id}
                  id={song.id}
                  name={song.name}
                  image={song.imageUrl}
                  artist_id={song.artist.id}
                  artist_name={song.artist.name}
                  genre_id={song.genre.id}
                  genre_name={song.genre.name}
                />
              </div>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
}

Filter.propTypes = {
  genre: propTypes.string.isRequired,
  allSongs: propTypes.array.isRequired,
};