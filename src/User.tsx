import React, { useEffect, useState } from "react";

import axios from "axios";
//Fetch data types for api request
import { UserTypes } from "./interfaces/UserInterface";
interface Props {}

const User: React.FC<Props> = () => {
  //Set state with types of defined types
  const [user, setUser] = useState<UserTypes[]>([]);
  const fetchUser = () => {
    axios
      .get("https://randomuser.me/api")
      .then(res => setUser(res.data.results))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <ul>
        {user &&
          user.map((user, key) => <li key={key}>{user.location.state}</li>)}
      </ul>
    </div>
  );
};

export default User;
