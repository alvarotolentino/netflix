import Featured from '../../components/feature/Featured'
import Navbar from "../../components/navbar/Navbar"
import List from "../../components/list/List"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured></Featured>
      <List></List>
      <List></List>
      <List></List>
    </div>
  )
}

export default Home
