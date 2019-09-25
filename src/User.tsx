import React, { useState } from "react";
import "./userStyle.scss";
import { Props } from "./interfaces/UserProptype";
//Fetch data types for api request

const User: React.FC<Props> = ({
  first,
  last,
  street,
  state,
  email,
  cell,
  username,
  picture,
  fetch
}: Props) => {
  const [text, setText] = useState<string>(`My name is${first} ${last}`);

  const handleHover = (name: string, type: string) => (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setText(`My ${type} is ${name}`);
  };
  return (
    <div id="wrapper">
      <div id="h3-img">
        <div id="image">
          <img src={picture} onClick={fetch} />
        </div>
        <div>
          <h3 id="tag" className={`toggle tag`}>
            {text}
          </h3>
        </div>
      </div>
      <div id="icons">
        <span onMouseMove={handleHover(`${first} ${last}`, "name")}>
          <i className="far fa-id-card" />
        </span>
        <span onMouseMove={handleHover(`${street} ${state}`, "adress")}>
          <i className="fas fa-map-marker-alt" />
        </span>
        <span onMouseMove={handleHover(`${email}`, `email`)}>
          <i className="far fa-address-card"></i>
        </span>
        <span onMouseMove={handleHover(`${cell}`, `phone number`)}>
          <i className="fas fa-phone" />
        </span>
        <span onMouseMove={handleHover(`${username}`, `username`)}>
          <i className="far fa-id-badge" />
        </span>
      </div>
    </div>
  );
};

export default User;
