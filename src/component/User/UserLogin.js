import React from "react";
//import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import posts from "../../db.json";

function UserLogin() {
  // let accounts = JSON.parse(fs.readFileSync('../../db.json'));
  const [post, setPost] = useState(posts.posts);
  console.log(post);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    // authToken: Math.floor(Math.random() * 10 + 1),
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(post);
  const handleSubmit = () => {
    const userEmail = post[0].email;
    // const password = posts[0].password;
    // console.log(userEmail);
    if (userEmail == user.email) {
      if (isValid()) {
        setUser();
        navigate("/");
        console.log(user, "ppppppppppppppp");
        // localStorage.setItem("authToken", user.authToken);
      }
    } else {
      alert("Not Registered..");
    }
  };
  console.log(user);
  const isValid = () => {
    let formData = true;
    switch (true) {
      case !user.email:
        setError({ email: "Email field is required!" });
        formData = false;
        break;
      case !user.password:
        setError({ password: "Password is required!" });
        formData = false;
        break;
      default:
        formData = true;
    }
    return formData;
  };
  return (
    <div>
      <LoginPage
        user={user}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default UserLogin;
