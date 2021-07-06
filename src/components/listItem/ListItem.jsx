import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useState } from 'react';
import './listItem.scss';

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://vod-progressive.akamaized.net/exp=1625528041~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3890%2F20%2F519454514%2F2420690851.mp4~hmac=4da5347f07da3746add0bc3d94442eee7fa2f411f6ec55aa13805bdaab7d8ed6/vimeo-prod-skyfire-std-us/01/3890/20/519454514/2420690851.mp4';
  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src='/images/large-movie8.jpg' alt='' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className="icon"></PlayArrow>
              <Add className="icon"></Add>
              <ThumbUpAltOutlined className="icon"></ThumbUpAltOutlined>
              <ThumbDownOutlined className="icon"></ThumbDownOutlined>
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>
            <div className='desc'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              quibusdam dicta, earum itaque expedita rem molestias! 
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  );
}
