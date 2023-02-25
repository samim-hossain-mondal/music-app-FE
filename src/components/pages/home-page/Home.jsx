import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {BASE_URL, API_URL} from '../../../constants/apiUrl';
import Card from '../../card/Card';
import icongenre from '../../../assets/icon-genre.svg';
import './Home.css';

export default function Home() {
  const [songs, setSongs] = useState([]);
  const fetchSongs = async () => {
    const data = await axios(`${BASE_URL}/${API_URL}`,{
      headers: {
        'Authorization': 'Basic QWlzaHdhcnlhIE4='
      }});
    setSongs(data.data.data);
  };
  useEffect(() => {
    fetchSongs();
  }, []);
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate('/genre');
  };
  return (
    <div>
      <div className='home'>
        <div className='home-header'>
          <div className='heading'>
            <a>all songs</a>
          </div>
          <div className='icon-img-1'>
            <img onClick={buttonClickHandler} style={{ cursor: 'pointer'}} src={icongenre} alt='sync' />
          </div>
        </div>
      </div>
      <div className='card-container'>
        {songs.map((song, index) => (
          <div key={index}>
            {index % 2 === 0 ? (<div className='card-even'>
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