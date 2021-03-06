import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';
import SocialSidebar from '../../components/socialSidebar/SocialSidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css';

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PU = process.env.PUBLIC_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };

    fetchUsers();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className='profile'>
        <SocialSidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PU + '/images/noCover.png'
                }
                alt=''
              />
              <img
                className='profileUserImg'
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PU + '/images/noAvatar.png'
                }
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
