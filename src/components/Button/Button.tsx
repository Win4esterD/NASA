import { EventHandler, SyntheticEvent } from "react";

type ButtonProps = {
  children: React.ReactNode;
  clickHandler?: EventHandler<SyntheticEvent>;
};

export function Button({ children, clickHandler }: ButtonProps) {
  return <button onClick={clickHandler}>{children}</button>;
}