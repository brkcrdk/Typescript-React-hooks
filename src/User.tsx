import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserTypes } from "./interfaces/UserInterface";

const User: React.FC<{}> = () => {
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
  console.log(user);
  return (
    <div>
      <ul>
        {user && user.map((user, key) => <li key={key}>{user.gender}</li>)}
      </ul>
    </div>
  );
};

export default User;
