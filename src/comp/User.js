import React, { useEffect, useState } from "react";
import "./stylecompo/user.css";

export default function User(props) {
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${props.userId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUserdata(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="userMain">
      User {props.userId}
      <table id="tableuser">
        <tr>
          <th>To Do ID</th>
          <td>{props.todoid}</td>
        </tr>
        <tr>
          <th>ToDo Title</th>
          <td>{props.titleTODO}</td>
        </tr>
        <tr>
          <th>User Id</th>
          <td>{props.userId}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{userdata.name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{userdata.email}</td>
        </tr>
      </table>
    </div>
  );
}
