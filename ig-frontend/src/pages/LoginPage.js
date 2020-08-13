import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // react-hooks/exhaustive-deps
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const onSubmit = async () => {
    let res = await fetch("http://localhost:1337/auth/local/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });

    let data = await res.json();
    setUser(data);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
