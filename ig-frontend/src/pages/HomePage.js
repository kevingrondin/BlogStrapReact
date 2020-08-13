import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      let res = await fetch("http://localhost:1337/posts");
      let data = await res.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className="Home">
      {!posts ? (
        <p>chargement</p>
      ) : (
        posts.map(({ id, description, likes, image }) => (
          <Link to={`/${id}`}>
            <Post likes={likes} description={description} url={image?.url} />
          </Link>
        ))
      )}
    </div>
  );
};

export default HomePage;
