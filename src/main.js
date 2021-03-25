import React, { useState, useEffect } from "react";

const Test = () => {

    // api url
  const url = "https://api.github.com/users";
    // setting up usestate for final user array
  const [users, setusers] = useState([]);
    // fething data from api
  const fetchingUser = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setusers(user);
    // console.log(user)
  };

  // useEffect for side effects
  useEffect(() => {
    fetchingUser();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <div className="class-flex">
              <li key={id} className="list-non-bullet user-flex">
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Test;
