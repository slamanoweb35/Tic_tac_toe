import { FC } from "react"

interface ButtonProps {
    /** valor do butão */
    value:string,
    /** callback */
    onClick: () => void
}

const Button: FC<ButtonProps> = (props) => {
    return (<>
        <button
            id="play"
            onClick={() => props.onClick()}
        >
        {props.value}
        </button>
    </>)
}

export default Button;  