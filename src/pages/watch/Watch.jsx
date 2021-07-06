import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined></ArrowBackOutlined>
        Home
      </div>
      <video
        className='video'
        autoplay
        progress
        controls
        src='https://vod-progressive.akamaized.net/exp=1625616584~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3890%2F20%2F519454514%2F2420690842.mp4~hmac=acc67dcd183dc72a1b0689a31bd2f927354d43bde96b4f15a72b0958db932eb8/vimeo-prod-skyfire-std-us/01/3890/20/519454514/2420690842.mp4'
      ></video>
    </div>
  );
}
