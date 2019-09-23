import React, { useEffect, useState } from "react";
import "./userStyle.scss";
import axios from "axios";
//Fetch data types for api request
import { UserTypes } from "./interfaces/UserInterface";
interface Props { }

const User: React.FC<Props> = () => {
  //Set state with types of defined types
  const [user, setUser] = useState<UserTypes[]>([]);
  const [text, setText] = useState<string>("")
  const fetchUser = () => {
    axios
      .get("https://randomuser.me/api")
      .then(res => setUser(res.data.results))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleHover = (name: string) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setText(name)
  }
  console.log(user)
  return (
    <div id="wrapper">
      {user && user.map((user, key) => (
        <div key={key}>
          <div><img src={user.picture.large} /></div>
          <div>
            <span onMouseMove={handleHover(`${user.name.first}`)}>
              <i className="far fa-address-card"></i>
            </span>
          </div>
        </div>))}

      {/* <div><img src="https://picsum.photos/150" /></div>
      <div><h1>{text}</h1></div>
      <div>
        <span onMouseMove={handleHover("burak")}><i className="far fa-address-card"></i></span>
        <span onMouseMove={handleHover("burak1")}><i className="far fa-address-card"></i></span>
        <span><i className="far fa-address-card"></i></span>
        <span><i className="far fa-address-card"></i></span>
        <span><i className="far fa-address-card"></i></span>
      </div> */}
    </div >
  );
};

export default User;
