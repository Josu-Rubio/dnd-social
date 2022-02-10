import Topbar from '../../components/topbar/Topbar';
import SidebarList from '../../components/sidebarList/SidebarList';
import './podcast.css';
import Radios from '../../components/radios/Radios';

export default function Podcast() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <div className='sidebar'>
          <div className='sidebarWrapper'>
            <SidebarList />
          </div>
        </div>
        <Radios />
      </div>
    </>
  );
}
