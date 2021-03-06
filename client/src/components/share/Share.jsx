import './share.css';
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from '@material-ui/icons';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Share() {
  const desc = useRef();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PU = process.env.PUBLIC_URL;
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.photo = fileName;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }

    if (desc.current.value !== '' || file !== null) {
      try {
        await axios.post('/posts', newPost);
        console.log(file);
        window.location.reload();
      } catch (err) {}
    } else {
      alert('You must share a comment or a file');
    }
  };

  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            className='shareProfileImg'
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PU + '/images/noAvatar.png'
            }
            alt=''
          />
          <textarea
            type='text'
            placeholder={`What's in your mind, ${user.username}?`}
            className='shareInput'
            ref={desc}
          ></textarea>
        </div>
        <hr className='shareHr' />
        {file && (
          <div className='shareImgContainer'>
            <img src={URL.createObjectURL(file)} className='shareImg' alt='' />
            <Cancel className='shareCancelImg' onClick={() => setFile(null)} />
          </div>
        )}
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='file' className='shareOption'>
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
              <input
                style={{
                  display: 'none',
                }}
                type='file'
                id='file'
                accept='.png, .jpg, .jpeg'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            {/* <div className='shareOption'>
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div> */}
          </div>
          <button className='shareButton' type='submit'>
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
