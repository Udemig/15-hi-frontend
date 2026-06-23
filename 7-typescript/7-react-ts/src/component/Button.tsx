import type { JSX, FC } from "react";
import React from "react";

interface IProps {
  text: string;
}
// 1) Component tipini tanımlama
// Prop Type: Tanımlandı
// Return Type: Oto. algıladı
const Button1 = ({ text }: IProps) => {
  return <button>{text}</button>;
};
// 2) Component tipini tanımlama
// Prop Type: Tanımlandı
// Return Type: Tanımlandı JSX.Element | React.ReactNode
const Button2 = ({ text }: IProps): React.ReactNode => {
  return <button>{text}</button>;
};

// 3) Component tipini tanımlama
// Prop Type: FC
// Return Type: FC
const Button3: FC<IProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button1;
