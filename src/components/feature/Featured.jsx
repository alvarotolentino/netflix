import "./featured.scss"
import { PlayArrow, InfoOutlined } from '@material-ui/icons'

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="/images/banner.jpg" alt="" />
      <div className="info">
        <img src="/images/logo-movie.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum rem voluptatibus dolorum cupiditate ipsam. Totam eum optio, architecto dicta nostrum eos accusantium! Earum aperiam eum officiis modi corrupti iure excepturi.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow></PlayArrow>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined></InfoOutlined>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
