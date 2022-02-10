import Topbar from '../../components/topbar/Topbar';
import SocialSidebar from '../../components/socialSidebar/SocialSidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './social.css';

export default function Social() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <SocialSidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
