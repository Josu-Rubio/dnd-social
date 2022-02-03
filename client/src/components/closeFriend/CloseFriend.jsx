import './closeFriend.css';
import { Link } from 'react-router-dom';

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className='sidebarFriend'>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        to={`/profile/${user.username}`}
      >
        <img
          className='sidebarFriendImg'
          src={PF + user.profilePicture}
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
