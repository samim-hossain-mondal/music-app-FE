import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import GenreHeader from '../../genre-header/GenreHeader';
import Filter from '../../filter/Filter';
import { BASE_URL, API_URL } from '../../../constants/apiUrl';
import gridimg from '../../../assets/icon-grid.svg';
import './Genre.css';

export default function Genre() {
  const [songs, setSongs] = useState([]);
  const fetchSongs = async () => {
    const response = await fetch(`${BASE_URL}/${API_URL}`,
      {
        headers: {
          'Authorization': 'Basic QWlzaHdhcnlhIE4='
        },
      }
    );  
    const data = await response.json();
    const songs = data.data;
    //console.log(songs);
    setSongs(songs);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  let allGenres = new Set();
  const getAllGenre = () => {
    songs.map((song) => {
      allGenres.add(song.genre.name);
    });
    allGenres = Array.from(allGenres);
  };
  getAllGenre();

  const navigate = useNavigate();
  const onClickGridImgHandler = () => {
    navigate('/home');
  };
  return (
    <div>
      <div className='genre'>
        <div className='genre-header'>
          <div className='genre-heading'>
            <a>genre</a>
          </div>
          <div className='genre-icon-img-1'>
            <img onClick={onClickGridImgHandler} src={gridimg} alt='gridimg' style={{cursor: 'pointer'}} />
          </div>
        </div>
        {allGenres.map((genre, index) => (
          <div className='genre-block' key={index}>
            <div className='genre-block-1'>
              <GenreHeader genre={genre} />
            </div>
            <div className='genre-block-2'>
              <Filter genre={genre} allSongs={songs} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}