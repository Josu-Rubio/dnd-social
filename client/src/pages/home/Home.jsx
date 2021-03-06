import Topbar from '../../components/topbar/Topbar';
import SidebarList from '../../components/sidebarList/SidebarList';
import BlogPost from '../../components/blogPost/BlogPost';
import './home.css';
import Article from '../../components/article/Article';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <div className='sidebar'>
          <div className='sidebarWrapper'>
            <SidebarList />
            <BlogPost />
          </div>
        </div>
        <Article />
      </div>
    </>
  );
}
