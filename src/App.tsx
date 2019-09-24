import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./User";
import { UserTypes } from "./interfaces/UserInterface";
import axios from "axios";
const App: React.FC = () => {
  //Set state with types of defined types
  const [user, setUser] = useState<UserTypes[]>([]);
  const [text, setText] = useState<string>("Hi!");
  const fetchUser = () => {
    axios
      .get("https://randomuser.me/api")
      .then((res) => setUser(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {user.length > 0
          ? user &&
            user.map((user, key) => (
              <User
                key={key}
                username={user.login.username}
                cell={user.cell}
                email={user.email}
                first={user.name.first}
                last={user.name.last}
                street={user.location.street}
                state={user.location.state}
                picture={user.picture.large}
              />
            ))
          : "Loading"}
      </header>
    </div>
  );
};

export default App;
