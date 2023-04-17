import play from "../types/play"
import currentRoom from "../types/room"
import perfil from "../types/account"
import "../css/placeBorder.css"

const Place_border = () => {
  return (<>
    {play.playing == true ? (<div id="place_border">
      <div id="you">
        {perfil.getNickname()} <span className="Span">{0}</span>
      </div>
      <div id="empty">
        Empty <span className="Span" id="middle">{0}</span>
      </div>
      <div id="opponent">
        {currentRoom.opponent} <span className="Span">{0}</span>
      </div>
    </div>)
      : <h1 id="warn">You are not inside a room</h1>}
  </>)
}

export default Place_border;