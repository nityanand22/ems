import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    handleLogin(email, password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col item-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white border-2 border-emerald-600 py-3 px-5 text-xl  outline-none bg-transparent rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-white border-2 border-emerald-600 py-3 px-5 text-xl  outline-none bg-transparent rounded-full mt-3 placeholder:text-gray-500"
            type="password"
            placeholder="Password"
            required
          />
          <button
            className="text-white border-none outline-none bg-emerald-600 py-3 px-5 text-xl   rounded-full mt-3 placeholder:text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
