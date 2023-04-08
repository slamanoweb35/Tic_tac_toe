import { FC } from "react"

interface ButtonProps {
    /** valor do butão */
    value:string,
    /** função chamada ao clicar no botão*/
    onClick?: void | string | number
}

const Button: FC<ButtonProps> = (props) => {
    return (<>
        <button
            id="play"
            onClick={() => props.onClick}
        >
        {props.value}
        </button>
    </>)
}

export default Button;  