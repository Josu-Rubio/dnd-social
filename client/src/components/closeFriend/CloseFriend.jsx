import './closeFriend.css';
import { Link } from 'react-router-dom';

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PU = process.env.PUBLIC_URL;

  return (
    <li className='sidebarFriend'>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        to={`/profile/${user.username}`}
      >
        <img
          className='sidebarFriendImg'
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PU + '/images/noAvatar.png'
          }
          alt=''
        />
      </Link>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        to={`/profile/${user.username}`}
      >
        <span className='sidebarFriendName'>{user.username}</span>
      </Link>
    </li>
  );
}
