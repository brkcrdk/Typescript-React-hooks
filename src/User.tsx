import React from "react";
import Reducer from "./Reducer";

const User: React.FC<{}> = () => {
  const reducer = Reducer();

  return <div>{reducer.status === "loading" && <div>Loading...</div>}</div>;
};

export default User;
