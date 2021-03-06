import { useContext, useEffect, useState } from 'react';
import './post.css';
import { MoreVert } from '@material-ui/icons';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Post({ post }) {
  const nl2br = require('react-nl2br');
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PU = process.env.PUBLIC_URL;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };

    fetchUsers();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put('/posts/' + post._id + '/like', { userId: currentUser._id });
    } catch (err) {}

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${user.username}`}>
              <img
                className='postProfileImg'
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PU + '/images/noAvatar.png'
                }
                alt=''
              />
            </Link>
            <Link
              to={`/profile/${user.username}`}
              style={{ textDecoration: 'none' }}
            >
              <span className='postUsername'>{user.username}</span>
            </Link>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{nl2br(post?.desc)}</span>
          <img className='postImg' src={PF + post.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={`${PU}/images/shield.png`}
              onClick={likeHandler}
              alt=''
            />
            <span className='postLikeCounter'>{like} people support this</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
