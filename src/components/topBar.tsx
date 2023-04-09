import { Link } from "react-router-dom"
import { FC } from "react";
import arrow from "../icon/arrow_back.png"
import bell from "../icon/bell.png"
import "../css/topBar.css"

interface TopBarProps {
  /** current page */
  pageName: string,
  /** back to previous page*/
  previousPage: string
}

const TopBar: FC<TopBarProps> = (props) => {
  return (<div id="_topBar">
    <Link to={props.previousPage}>
      <img src={arrow} id="arrow"/>
    </Link>

    <h1>{props.pageName}</h1>

    <Link to="/notification">
      <img src={bell} id="bell"/>
    </Link>
  </div>)
}

export default TopBar;