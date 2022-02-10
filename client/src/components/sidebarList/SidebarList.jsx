import './sidebarList.css';
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
import { Link } from 'react-router-dom';

export default function SidebarList() {
  return (
    <>
      <ul className='sidebarList'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Blog</span>
          </li>
        </Link>
        <Link
          to='/podcast'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Podcasts</span>
          </li>
        </Link>
        <li className='sidebarListItem'>
          <PlayCircleFilledOutlined className='sidebarIcon' />
          <span className='sidebarListItemText'>Videos</span>
        </li>
        <li className='sidebarListItem'>
          <WorkOutline className='sidebarIcon' />
          <span className='sidebarListItemText'>Crafts</span>
        </li>
        <li className='sidebarListItem'>
          <School className='sidebarIcon' />
          <span className='sidebarListItemText'>One-Shots</span>
        </li>
        <li className='sidebarListItem'>
          <Group className='sidebarIcon' />
          <span className='sidebarListItemText'>Personajes</span>
        </li>
        <li className='sidebarListItem'>
          <HelpOutline className='sidebarIcon' />
          <span className='sidebarListItemText'>Sugerencias</span>
        </li>
        <li className='sidebarListItem'>
          <Event className='sidebarIcon' />
          <span className='sidebarListItemText'>Eventos</span>
        </li>
      </ul>
      <button className='sidebarButton'>Show more</button>
      <hr className='sidebarHr' />
    </>
  );
}
