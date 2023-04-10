import { FC } from "react";
import "../css/game.css";

interface BarGameProps {
    /** column one position 1*/
    position1: string,
    /** column one position 2*/
    position2: string,
    /** column one position 3*/
    position3: string,

    /** column two position 1*/
    position4: string,
    /** column two position 2*/
    position5: string,
    /** column two position 3*/
    position6: string,

    /** column three position 1*/
    position7: string,
    /** column three position 2*/
    position8: string,
    /** column three position 3*/
    position9: string,
}

const BarGame: FC<BarGameProps> = (prop) => {
    return (<>
        <div className="container">
            <div className="coll">
                <div id="col1" className="cubo">{prop.position1}</div>
                <div id="col2" className="cubo">{prop.position2}</div>
                <div id="col3" className="cubo">{prop.position3}</div>
            </div>
            <div className="coll">
                <div id="col4" className="cubo">{prop.position4}</div>
                <div id="col5" className="cubo">{prop.position5}</div>
                <div id="col6" className="cubo">{prop.position6}</div>
            </div>
            <div className="coll">
                <div id="col7" className="cubo">{prop.position7}</div>
                <div id="col8" className="cubo">{prop.position8}</div>
                <div id="col9" className="cubo">{prop.position9}</div>
            </div>
        </div>
    </>)
}

export default BarGame;