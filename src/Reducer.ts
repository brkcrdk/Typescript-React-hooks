import React, { useState, useEffect } from "react";
import { Service } from "./interfaces/FetchInterface";
import { UserTypes } from "./interfaces/UserInterface";

export interface Users {
  results: UserTypes[];
}

const fetchReducer = () => {
  const [result, setResult] = useState<Service<Users>>({
    status: "loading"
  });

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default fetchReducer;
