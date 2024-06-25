import { useState } from "react";
import { NormalInput } from "../components/input";
import { NormalButton } from "../components/button";
export default function LoginPage() {
  const [loginFormObj, setLoginFormObj] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    console.log("loginFormObj------", loginFormObj);
  };
  return (
    <>
      <div className="col-12">
        <NormalInput
          label="Email"
          value={loginFormObj.email}
          name="email"
          onChange={(event) =>
            setLoginFormObj({ ...loginFormObj, email: event.target.value })
          }
          placeholder="Enter Email"
          errorMessage={""}
        />
      </div>
      <div className="col-12">
        <NormalInput
          label="Password"
          value={loginFormObj.password}
          name="password"
          onChange={(event) =>
            setLoginFormObj({ ...loginFormObj, password: event.target.value })
          }
          errorMessage={""}
          type="password"
          placeholder="Enter Password"
        />
      </div>
      <NormalButton
        type="submit"
        label="Login"
        className="btn-lg btn-primary"
        onClick={handleLogin}
      />
    </>
  );
}
