import { Link } from "react-router-dom"
import play from "../icon/play.png"
import person from "../icon/person.png"
import mail from "../icon/carta.png"
import "../css/bottomBar.css"

const BottomBar = () => {
  return (<div id="_bottomBar">

    <Link to="/multiplayer">
      <img src={mail} />
    </Link>

    <Link to="/playing">
      <img src={play} />
    </Link>

    <Link to="/account">
      <img src={person} />
    </Link>

  </div>)
}

export default BottomBar;