import React, { useState, useEffect } from "react";
import axios from "axios";

import UserTable from "./UserTable";

const ShowAllDataTable = () => {
  //const [user, setUser] = useState();
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
      <UserTable
        // user={user}
        allData={allData}
        handelDelete={handelDelete}
        handleSearch={setSearchData}
        searchData={searchData}
      />
    </>
  );
};

export default ShowAllDataTable;
