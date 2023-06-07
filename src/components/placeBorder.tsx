import currentRoom from "../types/room"
import perfil from "../types/account"
import updatePlaceBorder from "../types/updatePlaceBorder"
import place_border from "../types/placeBorder"
import { useReducer, useEffect, useState, FC } from "react"
import "../css/placeBorder.css"

interface Place_Border_Props {
  active:boolean
}

const Place_border:FC<Place_Border_Props> = ({active}) => {
  var [points, setPoints] = useState(place_border);
  var [, forceUpdate] = useReducer(some => some + 1, 0);

  useEffect(() => {
    let time = setInterval(() => {
      if (!updatePlaceBorder.update) return;

      updatePlaceBorder.update = false;
      setPoints(place_border);
      forceUpdate();
    },1000);

    return () => clearInterval(time);
  })

  return (<>
    {active == true ? (<div id="place_border">
      <div id="you">
        {perfil.getNickname()} <span className="Span">{points.you}</span>
      </div>
      <div id="empty">
        Ties <span className="Span" id="middle">{points.ties}</span>
      </div>
      <div id="opponent">
        {currentRoom.opponent.nick} <span className="Span">{points.opponnet}</span>
      </div>
    </div>)
      : <h1 id="warn">You are not inside a room</h1>}
  </>)
}

export default Place_border;