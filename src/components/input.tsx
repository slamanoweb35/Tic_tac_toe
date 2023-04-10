import { FC } from "react";

interface InputProps {
  /** valor do input */
  value: string,
  /** Descrição do input */
  placeholder?: string
  /** input identification */
  id: string
}


const Input: FC<InputProps> = (prop) => {
  return (
    <input
      id={prop.id}
      placeholder={prop.placeholder}
      defaultValue={prop.value}
    />
  );
}

export default Input;