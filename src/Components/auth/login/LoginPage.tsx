import { useEffect, useState } from "react";

import { useFormik } from "formik";

import { ILogin } from "../../../Models/User/interfaces/ILogin";

import { useActions } from "../../../hook/useActions";
import { useTypedSelector } from "../../../hook/useTypedSelector";
import { Navigate, Route, useNavigate } from "react-router-dom";

// to do
const validate = (values: ILogin) => {
  const errors = {};

  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);

  return errors;
};


const LoginPage = () => {

    const navigate = useNavigate();

   
  const { isAuth, user } = useTypedSelector((store) => store.user);
  const { Login, Register,handleSuccessGoogle } = useActions();

  let [authMode, setAuthMode] = useState("signin");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
      isRemember: false,
    },
    validate,
    onSubmit: (values) => {
      console.log("Login data from submit", values);
      Login(values);
    },
  });

  const formikRegister = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Register data on submit", values);
      Register(values);
    },
  });


    const GoogleAuth =()=>{
    try {
      const clientId="17761511781-e38853miclpejbb61bhm76085f7oe1o2.apps.googleusercontent.com";
      window.google.accounts!.id.initialize({
        client_id: clientId,
        callback:handleSuccessGoogle 
      });
      window.google.accounts!.id.renderButton(document.getElementById("googleBtn"),
        {theme: "outline", size: "Large"} );
    } catch (error) {
      console.log("google login error",error);
      
    }
    }

  useEffect(() => {
    GoogleAuth();
    if (localStorage.getItem("token")) {
      console.log("token was given");
    }
    if (isAuth) {
      console.log("Auth: ", isAuth);
       navigate("/");
    }

  }, [isAuth]);

  if (authMode == "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={formikLogin.handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
              <div id="googleBtn"></div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
                value={formikLogin.values.email}
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
              {formikLogin.errors.email ? (
                <div>{formikLogin.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.password}
                className="form-control mt-1"
                placeholder="Enter password"
                required
              />
              {formikLogin.errors.password ? (
                <div>{formikLogin.errors.password}</div>
              ) : null}
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="Auth-form-container-reg">
      <form className="Auth-form" onSubmit={formikRegister.handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
            <div id="googleBtn"></div>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={formikRegister.handleChange}
              value={formikRegister.values.name}
              className="form-control mt-1"
              placeholder="Enter name"
              required
            />
            {formikRegister.errors.name ? (
              <div>{formikRegister.errors.name}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="surname">Surname</label>
            <input
              id="surname"
              type="text"
              name="surname"
              onChange={formikRegister.handleChange}
              value={formikRegister.values.surname}
              className="form-control mt-1"
              placeholder="Enter surname"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={formikRegister.handleChange}
              value={formikRegister.values.email}
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
            {formikRegister.errors.email ? (
              <div>{formikRegister.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={formikRegister.handleChange}
              value={formikRegister.values.password}
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
            {formikRegister.errors.password ? (
              <div>{formikRegister.errors.password}</div>
            ) : null}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
