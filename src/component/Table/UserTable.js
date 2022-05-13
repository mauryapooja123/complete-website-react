import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function UserTable() {
  const [searchData, setSearchData] = useState("");
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    console.log(res.data, "=======");
    setAllData(res.data);
  };

  const handelDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4000/posts/${id}`);
    console.log(res.data, ";lllllllllllll");
    getData();
  };
  return (
    <>
      <p> </p>
      <input
        type="text"
        placeholder="Search.."
        value={searchData}
        onChange={(event) => setSearchData(event.target.value)}
      />
      <table>
        <tr style={{ color: "white" }}>
          <th style={{ color: "black" }}> First Name</th>
          <th style={{ color: "black" }}> Last Name</th>
          <th style={{ color: "black" }}>Email</th>
          <th style={{ color: "black" }}> Password</th>
          <th style={{ color: "black" }}>Action</th>
        </tr>
        {allData &&
          allData
            .filter(
              (us) =>
                us.email.toLowerCase().includes(searchData.toLowerCase()) ||
                us.password.toLowerCase().includes(searchData.toLowerCase()) ||
                us.firstname.toLowerCase().includes(searchData.toLowerCase()) ||
                us.lastname.toLowerCase().includes(searchData.toLowerCase())
            )
            .map((data) => (
              <tr style={{ color: "white" }}>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                  <button style={{ color: "blue" }}> Edit</button>
                  <button
                    style={{ color: "red" }}
                    type="submit"
                    onClick={() => handelDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
      </table>
    </>
  );
}

export default UserTable;
