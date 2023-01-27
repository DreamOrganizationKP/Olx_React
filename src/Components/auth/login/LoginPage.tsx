import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const initialFormDataLogin = Object.freeze({
    email: "",
    password: ""
  });

  const initialFormDataRegister = Object.freeze({
    name:"",
    surname:"",
    email: "",
    password: "",
    repeatedPassword:""
  });
 

const LoginPage = () => {


    const [formDataLogin, updateFormDataLogin] = useState(initialFormDataLogin);
    const [formDataRegister, updateFormDataRegister] = useState(initialFormDataLogin);
  
    const handleChangeLogin = (e:any) => {
      updateFormDataLogin({
        ...formDataLogin,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };

    const handleChangeRegister = (e:any) => {
        updateFormDataRegister({
          ...formDataRegister,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
      };

    let [authMode, setAuthMode] = useState("signin");
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    const handleSubmitLogin = (event: any) => {
        event.preventDefault();
        console.log(formDataLogin);
    };
    const handleSubmitRegister = (event: any) => {
        event.preventDefault();
        console.log(formDataRegister);
    };

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
                <form className="Auth-form" onSubmit={handleSubmitLogin}>
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
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChangeLogin}
                                className="form-control mt-1"
                                placeholder="Enter email"
                                required
                            />

                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChangeLogin}
                                className="form-control mt-1"
                                placeholder="Enter password"
                                required
                            />

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
            <form className="Auth-form" onSubmit={handleSubmitRegister}>
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
                        <label> Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChangeRegister}
                            className="form-control mt-1"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Surname</label>
                        <input
                            type="text"
                            name="surname"
                            onChange={handleChangeRegister}
                            className="form-control mt-1"
                            placeholder="Surname"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChangeRegister}
                            className="form-control mt-1"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChangeRegister}
                            className="form-control mt-1"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Repeated Password</label>
                        <input
                            type="password"
                            name="repeatedPassword"
                            onChange={handleChangeRegister}
                            className="form-control mt-1"
                            placeholder="Password"
                            required
                        />
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