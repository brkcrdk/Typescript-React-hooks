import React, { useEffect, useState } from "react";
import "./userStyle.scss";
import axios from "axios";
//Fetch data types for api request
import { UserTypes } from "./interfaces/UserInterface";
interface Props {

  first: string,
  last: string


  street: string,
  state: string

  email: string
  cell: string
  username: string
}

const User: React.FC<Props> = ({ first }: Props) => {


  //Set state with types of defined types

  // const [user, setUser] = useState<UserTypes[]>([]);
  // const [text, setText] = useState<string>("Hi!")
  // const fetchUser = () => {
  //   axios
  //     .get("https://randomuser.me/api")
  //     .then(res => setUser(res.data.results))
  //     .catch(err => console.log(err));
  // };
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  // const handleHover = (name: string, type: string) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  //   setText(`My ${type} is ${name}`)
  // }

  console.log(name)

  return (
    <div id="wrapper">

      {/* {user && user.map((user, key) => (
        <div key={key}>
          <div><img src={user.picture.large} /></div>
          <div>
            <h3>{text}</h3>
          </div>
          <div>
            <span onMouseMove={handleHover(`${user.name.first} ${user.name.last}`, `name`)}>
              <i className="far fa-id-card" />
            </span>
            <span onMouseMove={handleHover(`${user.location.street} ${user.location.state}`, `address`)}>
              <i className="fas fa-map-marker-alt" />
            </span>
            <span onMouseMove={handleHover(`${user.email}`, `email`)}>
              <i className="far fa-address-card"></i>
            </span>
            <span onMouseMove={handleHover(`${user.cell}`, `phone number`)}>
              <i className="fas fa-phone" />
            </span>
            <span onMouseMove={handleHover(`${user.login.username}`, `username`)}>
              <i className="far fa-id-badge" />
            </span>
          </div>
        </div>))} */}
    </div >
  );
};

export default User;
