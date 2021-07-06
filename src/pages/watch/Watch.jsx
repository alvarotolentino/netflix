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
        src='https://vod-progressive.akamaized.net/exp=1625528041~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3890%2F20%2F519454514%2F2420690842.mp4~hmac=103f722d1378d61f9973d190cd508732da8c49c77ee305a8c9291cfc1f75e350/vimeo-prod-skyfire-std-us/01/3890/20/519454514/2420690842.mp4'
      ></video>
    </div>
  );
}
