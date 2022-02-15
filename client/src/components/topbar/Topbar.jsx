import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PU = process.env.PUBLIC_URL;
  const { user } = useContext(AuthContext);

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img className='logoImg' src={PU + '/images/logo512.png'} alt='' />
        </Link>

        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>D&#38;DSocial</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            placeholder='Search for friends, posts or video'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className='topbarLink'>Home</span>
          </Link>
          <Link
            to='/social'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span className='topbarLink'>Social</span>
          </Link>
        </div>
        {user ? (
          <div className='topbarIcons'>
            <div className='topbarIconItem'>
              <Person />
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
              <Link to='/messenger'>
                <Chat style={{ color: 'black' }} />
              </Link>
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
              <Notifications />
              <span className='topbarIconBadge'>1</span>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div>
          {user ? (
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PU + '/images/noAvatar.png'
                }
                alt=''
                className='topbarImg'
              />
            </Link>
          ) : (
            <div className='toggleLinks'>
              <Link
                to={'/register'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className='toLogin'>Register</div>
              </Link>
              <Link
                to={'/login'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className='toLogin'>Login</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
