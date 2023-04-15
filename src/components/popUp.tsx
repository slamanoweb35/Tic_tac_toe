import { FC } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/popUp.css"

interface PopUpProp {
  /** type of message*/
  type: string,
  /** appear popup*/
  hidden: boolean,
  /** player name*/
  nick:string,
  /** message*/
  message: string
}

const PopUp: FC<PopUpProp> = (prop) => {
  let [active, setActive] = useState(prop.hidden)
  let [progress,setProgress] = useState(0)
  let [height,setHeight] = useState(0);

  useEffect(() => {
    if (progress == 5) {setProgress(0);setActive(true)}
    if (active == true) return;

    prop.type == "invite" ? setHeight(19) : setHeight(13);

    let time = setInterval(() => {
      setProgress(progress += 1);
    },1000);
    
    return () => clearInterval(time);
  }, [progress])

  return (<div id="popUp_body" hidden={active} style={{height:height + "%"}}>
    <div id="progress_body">
      <div id="progress" style={{width:+100-(progress*20)+"%"}}></div>
    </div>

    <p id="_nick">{prop.nick}</p>
    <p id="message">{prop.message}</p>

    {prop.type == "invite" ? <>
      <Link to="/playing">
        <Button
          id="accepted"
          value="Accepted"
          onClick={() => { }}
        />
      </Link>

      <Button
        id="denied"
        value="Denied"
        onClick={() => { }}
      />

    </> : undefined}
  </div>)
}

export default PopUp;