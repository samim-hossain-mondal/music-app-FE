import React, {useEffect, useState} from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import './like.css';
import heartred from '../../assets/heart-red.svg';
import heartgray from '../../assets/heart-gray.svg';
import {BASE_URL, API_URL} from '../../constants/apiUrl';

export default function LikeButton({id}) {
  const iD = id.toString();
  const [like, setLike] = useState({});
  const fetchLikes = async () => {
    const data = await axios(`${BASE_URL}/${API_URL}/${iD}/likes`,{
      headers: {
        'Authorization': 'Basic QWlzaHdhcnlhIE4='
      }});
    setLike(data.data.data);
  };
  useEffect(() => {
    fetchLikes();
  }, []);
  const clickLikeHandler = async () => {
    setLike({
      ...like,
      like: !like.like,
      count: like.like ? like.count - 1 : like.count + 1,
    });
    await axios.patch(`${BASE_URL}/${API_URL}/${id}/likes`, {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Basic QWlzaHdhcnlhIE4='
      },
    }, {
      like: !like.like
    });
  };
  return (
    <div className='card-right'>
      <img className='heart-img' src={like.like ? heartred : heartgray} alt='sync' style={{cursor: 'pointer'}} onClick={clickLikeHandler}/>
      {like.count !== undefined &&
            (like.count.toString().length < 2 ?
              (<a className='text-center-1'>{like.count}</a>)
              :
              like.count.toString().length < 3 ?
                (<a className='text-center-2'>{like.count}</a>)
                :
                (<a className='text-center-3'>{like.count}</a>)
            )
      }
    </div>
  );
}
LikeButton.propTypes = {
  id: propTypes.number,
};