import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src={`${PF}gift.png`} alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className='rigthbarAd' src={`${PF}ad.png`} alt='' />
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
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src={`${PF}person/1.jpeg`}
              alt=''
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src={`${PF}person/2.jpeg`}
              alt=''
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src={`${PF}person/3.jpeg`}
              alt=''
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src={`${PF}person/4.jpeg`}
              alt=''
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              className='rightbarFollowingImg'
              src={`${PF}person/5.jpeg`}
              alt=''
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
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
