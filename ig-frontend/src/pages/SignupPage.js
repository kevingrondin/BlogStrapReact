import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const SignupPage = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // react-hooks/exhaustive-deps
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const onSubmit = async () => {
    let res = await fetch("http://localhost:1337/auth/local/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        email,
        password,
      }),
    });

    let data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Signup</h2>

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

export default SignupPage;
