import './sidebar.css';
import {
  RssFeed,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons';
// import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Sidebar() {
  const [allUsers, setAllUsers] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  // We could add also a filter for friends so they don't appear on the rightbar
  // We are working on it
  const userFriends = currentUser.followins;

  function randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersList = await axios.get('/users/usersList');
        const values = Object.values(usersList.data);
        for (let i = 0; i < values.length; i++) {
          if (values[i]._id === currentUser._id) {
            values.splice(i, 1);
            // } else {
            //   for (let j = 0; j < userFriends.length; j++) {
            //     if (values[i]._id === userFriends[j]) {
            //       values.splice(i, 1);
            //     }
            //   }
          }
          console.log(values);
        }
        setAllUsers(values);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show more</button>
        <hr className='sidebarHr' />
        <h1>Otros aventureros de nuestro gremio...</h1>
        <ul className='sidebarFriendList'>
          {randomArrayShuffle(
            allUsers
              ?.slice(0, 10)
              .map((u) => <CloseFriend key={u.id} user={u} />)
          )}
        </ul>
      </div>
    </div>
  );
}
