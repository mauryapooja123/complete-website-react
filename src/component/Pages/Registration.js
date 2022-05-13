import React from "react";

function Registration(props) {
  return (
    <div className="form">
      <h1> Registration Form</h1>
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
            name="firstname"
            value={props.user.firstname}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>
            {" "}
            {props.error && props.error.firstname}
          </p>
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="form__input"
            placeholder="LastName"
            name="lastname"
            value={props.user.lastname}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error && props.error.lastname}</p>
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            name="email"
            value={props.user.email}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error && props.error.email}</p>
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={props.user.password}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error && props.error.password}</p>
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn" onClick={props.handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Registration;
