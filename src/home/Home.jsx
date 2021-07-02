import Featured from '../components/feature/Featured'
import Navbar from "../components/navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured></Featured>
    </div>
  )
}

export default Home
