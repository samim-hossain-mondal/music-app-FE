import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_URL} from '../../constants/apiUrl';
import {useNavigate} from 'react-router-dom';
import Empty from '../pages/empty-body/Empty';
import Home from '../pages/home-page/Home';

export default function Main() {
  const [clickSync, setClickSync] = useState(false);
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
  const clickHandler = () => {
    if(songs.length === 0){
      setClickSync(false);
      return;
    }
    setClickSync(true);
    navigate('/home');
  };
  return (
    <div >
      {clickSync ? <Home/> : <Empty clickHandler={clickHandler} />}
    </div>
  );
}