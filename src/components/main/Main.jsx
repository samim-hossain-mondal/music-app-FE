import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Empty from '../pages/empty-body/Empty';
import Home from '../pages/home-page/Home';

export default function Main() {
  const [clickSync, setClickSync] = useState(false);
  const navigate = useNavigate();
  const clickHandler = () => {
    setClickSync(true);
    navigate('/home');
  };
  return (
    <div >
      {clickSync ? <Home /> : <Empty clickHandler={clickHandler} />}
    </div>
  );
}