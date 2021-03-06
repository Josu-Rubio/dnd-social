import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@material-ui/icons';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PU = process.env.PUBLIC_URL;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  // we have changed here useState for this variable. It's working -_-
  let followed = currentUser.followins.includes(user?._id);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
      followed = !followed;
    } catch (err) {
      console.log(err);
    }
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src={`${PF}gift.png`} alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>

        <iframe
          className='playlist'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1387311289%3Fsecret_token%3Ds-oV3YTwUcrCj&color=%23222020&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true'
        ></iframe>

        <h4 className='rightbarTitle'>Friends Online</h4>
        <ul className='rightbarFriendsList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className='rightbarFollowButton' onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? "I'ts Complicated"
                : user.relationship === 3
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarfollowinss'>
          {friends.map((friend) => (
            <Link
              to={`/profile/${friend.username}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className='rightbarfollowins'>
                <img
                  className='rightbarfollowinsImg'
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PU + '/images/noAvatar.png'
                  }
                  alt=''
                />
                <span className='rightbarfollowinsName'>{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
