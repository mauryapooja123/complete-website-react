import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../Pages/Registration";

function UserRegistration() {
  useEffect(() => {
    getdata();
  }, []);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [allData, setAllData] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (isValid()) {
      await axios.post("http://localhost:4000/posts", user);
      setUser();
      navigate("/login");
      console.log(user, "ppppppppppppppp");
    }
  };

  const getdata = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    console.log(res.data, "llllllllllllllll");
    setAllData(res.data);
  };
  const chackEmail = () => {
    const userData = allData.find((data) => data.email === user.email);
    if (userData) {
      return false;
    }
    return true;
  };
  const isValid = () => {
    const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const nameregex = /^[a-zA-Z ]{2,10}$/;
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let formData = true;

    switch (true) {
      case !user.firstname:
        setError({ firstname: "FirstName field is required!" });
        formData = false;
        break;
      case user.firstname && !nameregex.test(user.firstname):
        setError({ firstname: "Please enter valid firstName" });
        formData = false;
        break;
      case !user.lastname:
        setError({ lastname: "lastName field is required!" });
        formData = false;
        break;
      case user.lastname && !nameregex.test(user.lastname):
        setError({ lastname: "Please enter valid lastname " });
        formData = false;
        break;

      case !user.email:
        setError({ email: "Email field is required!" });
        formData = false;
        break;
      case user.email && !regex.test(user.email):
        setError({ email: "Please enter valid email " });
        formData = false;
        break;
      case !chackEmail():
        setError({ email: "Email already exist!" });
        formData = false;
        break;

      case !user.password:
        setError({ password: "Password is required!" });
        formData = false;
        break;
      case user.password && !passwordregex.test(user.password):
        setError({
          password:
            "password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter ",
        });
        formData = false;
        break;

      default:
        formData = true;
    }
    return formData;
  };

  return (
    <div>
      <Registration
        user={user}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default UserRegistration;
