import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cnf_password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState(true);

  const onHandleChange = (e) => {
    console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post(`http://localhost:3005/api/register`, currentUser);
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        dispatch(setIsModalVisible(false));
        navigate("/restaurants");
        // location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post(`http://localhost:3005/api/login`, currentUser);
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        dispatch(setIsModalVisible(false));
        navigate("/restaurants");
        // location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cnf_password } = values;
    console.log(name);
    const currentUser = { name, email, password, cnf_password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(setIsModalVisible(false));
  //   navigate("/restaurants");
  // };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title">{!isMember ? "Sign Up" : "Sign In"} </div>
        <form onSubmit={onSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {isMember && <input type="text" placeholder="Username" value={values.name} name="name" onChange={onHandleChange} />}
          <input type="email" placeholder="Email" value={values.email} name="email" onChange={onHandleChange} />
          <input type="password" placeholder="Password" name="password" value={values.password} onChange={onHandleChange} />
          {!isMember && (
            <input
              type="password"
              placeholder="Confirm Password"
              name="cnf_password"
              required
              value={values.cnf_password}
              onChange={onHandleChange}
            />
          )}
          <button>{!isMember ? "Sign Up" : "Sign in"}</button>
        </form>
        <div className="signUpLine">
          {!isMember ? "Already Signed Up?" : "New to Wedeliver?"}{" "}
          <span onClick={() => setIsMember(!isMember)}>{!isMember ? "Sign In Now" : "Sign Up Now"} </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
