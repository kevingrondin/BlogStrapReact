import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user]);

  const onSubmit = async () => {
    if (!description) setError("Plese add a description");
    if (!file) setError("Plese add a file");

    // console.log("jwt", user.jwt);

    let formData = new FormData();
    formData.append("data", JSON.stringify({ description }));
    formData.append("files.image", file);

    console.log(formData);

    try {
      await fetch("http://localhost:1337/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
        body: formData,
      });
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="Create">
      <h2>Create</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setError("");
            setDescription(event.target.value);
          }}
        />
        <input
          type="file"
          placeholder="Add a file"
          onChange={(event) => {
            setError("");
            setFile(event.target.files[0]);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePage;
