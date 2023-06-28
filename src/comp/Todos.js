import React, { useEffect, useState } from "react";
import "./stylecompo/Todos.css";
import User from "./User";

export default function Todos() {
  const [data, setData] = useState([]);
  const [valued, setValued] = useState();
  const [valuedclass, setValuedclass] = useState();
  const [valueTitle, setValueTitle] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [searchresult, setSearchresult] = useState();
  
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (event) => {
    setValuedclass(event.currentTarget.className);
    setValued(event.currentTarget.id);
    setValueTitle(event.currentTarget.title);
    console.log(event.currentTarget.title);
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if(searchValue !== ""){
      const Newdata = data.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchValue.toLowerCase());
      })
      
    setSearchresult(Newdata);

    }
    else{
      console.log('as')
      setSearchresult(data);
    }
}
  return (
    <>
      {/* {data.map((value, i) =>{
     return( <h1 style={{color: 'red'}}>{value.userId}</h1>)
    })} */}
      <div id="main">
        <div id="right">
          <div className="headTODOS">
            <h3 className="headtitle">ToDo's</h3>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => searchItems(e.target.value)}
              name="Serach"
            ></input>
          </div>
          <div className="mainbox">
            <table>
              <tr>
                <th>ToDo Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {data.map((value, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{value.id}</td>
                      <td>{value.title}</td>
                      <td>
                        {value.completed === false ? "incomleted" : "completed"}
                      </td>
                      <td>
                        {" "}
                        <button
                          id={value.userId}
                          className={`${value.id}`}
                          title={value.title}
                          onClick={handleClick}
                        >
                          View User
                        </button>{" "}
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
        <div id="left">
          <User
            userId={valued}
            todoid={valuedclass}
            titleTODO={valueTitle}
          ></User>
        </div>
      </div>
    </>
  );
}
