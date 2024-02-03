import React, { useEffect, useRef, useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSuccess, setUserName } from "../../store/AuthSlice";
import { FwSpinner } from "@freshworks/crayons/react";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cnf_password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const loginRef = useRef(null);
  const focusLogin = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState(true);

  useEffect(() => {
    loginRef.current.focus();
  }, [isMember]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (focusLogin.current && !focusLogin.current.contains(event.target)) {
        dispatch(setIsModalVisible(false));
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dispatch]);

  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      // Perform the action you want on Enter key press
      const { name, email, password, cnf_password } = values;
      console.log("enter running");
      const currentUser = { name, email, password, cnf_password };
      if (isMember) {
        loginUser(currentUser);
      } else {
        registerUser(currentUser);
      }
    }
  };

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
      setLoading(true);
      const response = await axios.post(`https://wedeliver-pranays-projects-abd5e9c0.vercel.app/api/register`, currentUser);
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        setLoading(false);
        dispatch(loginSuccess()); // Dispatch loginSuccess action
        dispatch(setIsModalVisible(false));
        navigate("/restaurants");
        // location.reload();
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e.response.data);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      setLoading(true);
      const response = await axios.post(`https://wedeliver-pranays-projects-abd5e9c0.vercel.app/api/login`, currentUser);
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        setLoading(false);
        console.log("user=", user.name);
        dispatch(setUserName(user.name));
        dispatch(loginSuccess()); // Dispatch loginSuccess action
        dispatch(setIsModalVisible(false));
        navigate("/restaurants");
        // location.reload();
      }
    } catch (e) {
      setLoading(false);
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
      <div className="login-container" ref={focusLogin}>
        <div className="login-title">{!isMember ? "Sign Up" : "Sign In"} </div>
        <form onSubmit={onSubmit}>
          {error && <div className="errorText">{error}</div>}
          {!isMember && (
            <input
              type="text"
              placeholder="Username"
              value={values.name}
              name="name"
              onChange={onHandleChange}
              onKeyDown={onPressEnter}
              ref={!isMember ? loginRef : null}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            name="email"
            onChange={onHandleChange}
            onKeyDown={onPressEnter}
            ref={isMember ? loginRef : null}
          />
          <input type="password" placeholder="Password" name="password" value={values.password} onChange={onHandleChange} onKeyDown={onPressEnter} />
          {!isMember && (
            <input
              type="password"
              placeholder="Confirm Password"
              name="cnf_password"
              required
              value={values.cnf_password}
              onChange={onHandleChange}
              onKeyDown={onPressEnter}
            />
          )}
          <button>
            {!loading ? (
              <>{!isMember ? "Sign Up" : "Sign in"}</>
            ) : (
              <>
                <FwSpinner size="medium" color="white" className="spinner"></FwSpinner>
              </>
            )}
          </button>
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
