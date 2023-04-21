import play from "../types/play"
import currentRoom from "../types/room"
import perfil from "../types/account"
import { FC } from "react"
import "../css/placeBorder.css"

interface PlaceBorderProp {
  /** your points*/
  you:number,
  /** empty on the match*/
  empty:number,
  /** opponent points*/
  opponent:number,
}

const Place_border:FC<PlaceBorderProp> = (prop) => {
  return (<>
    {play.playing == true ? (<div id="place_border">
      <div id="you">
        {perfil.getNickname()} <span className="Span">{prop.you}</span>
      </div>
      <div id="empty">
        Empty <span className="Span" id="middle">{prop.empty}</span>
      </div>
      <div id="opponent">
        {currentRoom.opponent.nick} <span className="Span">{prop.opponent}</span>
      </div>
    </div>)
      : <h1 id="warn">You are not inside a room</h1>}
  </>)
}

export default Place_border;