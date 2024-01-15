import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [mode, setMode] = useState("login");

  const handleLoginClick = () => {
    setMode("login");
  };
  const handleSign_upClick = () => {
    setMode("sign_up");
  };
  return (
    <div className="grid max-w-[500px] mx-auto my-8 bg-slate-900 p-4 rounded-md shadow-lg">
      <h2 className="text-3xl font-semibold my-4">Gallery App</h2>
      <div className="flex gap-2">
        <span
          className={`authMode ${mode === "sign_up" && "active"}`}
          onClick={handleLoginClick}
        >
          Login
        </span>
        <span
          className={`authMode ${mode === "login" && "active"}`}
          onClick={handleSign_upClick}
        >
          Sign up
        </span>
      </div>
      {mode === "login" ? <Login /> : <SignUp />}
    </div>
  );
};
export default Auth;
