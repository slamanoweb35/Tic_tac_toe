import { FC } from "react";

interface InputProps {
  /** valor do input */
  value: string,
  /** Descrição do input */
  placeholder?: string

}


const Input: FC<InputProps> = (prop) => {
  return (
    <input
      id="Nickname"
      placeholder={prop.placeholder}
      value={prop.value}
    />
  );
}

export default Input;