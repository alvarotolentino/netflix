import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useState } from 'react';
import './listItem.scss';

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index *2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src='/images/small-movie6.jpg' alt='' />
      <div className='itemInfo'>
        <div className='icons'>
          <PlayArrow></PlayArrow>
          <Add></Add>
          <ThumbUpAltOutlined></ThumbUpAltOutlined>
          <ThumbDownOutlined></ThumbDownOutlined>
        </div>
        <div className='itemInfoTop'>
          <span>1 hour 14 mins</span>
          <span className='limit'>+16</span>
          <span>1999</span>
        </div>
        <div className='desc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          quibusdam dicta, earum itaque expedita rem molestias! Iusto sint in
          omnis aliquam eius, at eaque consectetur, quam sit perferendis, natus
          earum!
        </div>
        <div className='genre'>Action</div>
      </div>
    </div>
  );
}
