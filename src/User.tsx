import React, { useState } from "react";
import "./userStyle.scss";
//Fetch data types for api request
interface Props {
  first: string;
  last: string;
  street: string;
  state: string;
  email: string;
  cell: string;
  username: string;
  picture: string;
}

const User: React.FC<Props> = ({
  first,
  last,
  street,
  state,
  email,
  cell,
  username,
  picture
}: Props) => {
  //Set state with types of defined types

  const [text, setText] = useState<string>("Hi!");

  const handleHover = (name: string, type: string) => (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setText(`My ${type} is ${name}`);
  };

  return (
    <div id="wrapper">
      <div id="h3-img">
        <img src={picture} />
        <div>
          <h3 id="tag" className="tag toggle">
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
