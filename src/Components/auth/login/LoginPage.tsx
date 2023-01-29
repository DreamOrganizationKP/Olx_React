import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormik } from "formik";
import { Formik } from "formik/dist/Formik";
import { ILogin } from "../../../Models/User/interfaces/ILogin";
import { useActions } from "../../../hook/useActions";



  
 
  // to do
  const validate = (values:ILogin) => {
    const errors = {}
  
   
    return (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email));
    
  
    return errors
  }

  

const LoginPage = () => {

 
    const { Login } = useActions();


    let [authMode, setAuthMode] = useState("signin");
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
  
    
    
    
      const formikLogin = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        validate,
        onSubmit: (values) => {
            console.log("Login data", values);
            Login(values);
        },
      });

      const formikRegister = useFormik({
        initialValues: {
            name:"",
            surname:"",
            email:"",
            password:"",
            repeatedPassword:"",
        },
        validate,
        onSubmit: (values) => {
            console.log("Register data", values);
        },
    
      });

   

    const handleSuccessGoogle = (resp: any) => {
        console.log("Resp google", resp);
        const {credential} = resp;
        console.log("Google token", credential);
    }

    useEffect(() => {
        const clientId="17761511781-e38853miclpejbb61bhm76085f7oe1o2.apps.googleusercontent.com";
        window.google.accounts!.id.initialize({
          client_id: clientId,
          callback:handleSuccessGoogle 
        });
        window.google.accounts!.id.renderButton(document.getElementById("googleBtn"),
          {theme: "outline", size: "Large"} );
      }, []);

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
                             {formikLogin.errors.email ? <div>{formikLogin.errors.email}</div> : null}

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
                             {formikLogin.errors.password ? <div>{formikLogin.errors.password}</div> : null}

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
        )
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
                              {formikRegister.errors.name ? <div>{formikRegister.errors.name}</div> : null}
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
                              {formikRegister.errors.email ? <div>{formikRegister.errors.email}</div> : null}
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
                              {formikRegister.errors.password ? <div>{formikRegister.errors.password}</div> : null}
                    </div>
                    <div className="form-group mt-3">
                    <label htmlFor="repeatedPassword">Repeat passwprd</label>
                            <input
                            id="repeatedPassword"
                                type="password"
                                name="repeatedPassword"
                                onChange={formikRegister.handleChange}
                                value={formikRegister.values.repeatedPassword}
                                className="form-control mt-1"
                                placeholder="Enter repeat password"
                                required
                            />
                              {formikRegister.errors.repeatedPassword ? <div>{formikRegister.errors.name}</div> : null}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                   
                </div>
            </form>
        </div>
    )

}

export default LoginPage;