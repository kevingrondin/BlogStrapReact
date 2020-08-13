import React from "react";

const API_URL = "http://localhost:1337";

const formatImage = (u) => `${API_URL}${u}`;

const Post = ({ description, likes, url }) => {
  return (
    <div className="Post">
      <img className="Post__Image" alt={description} src={formatImage(url)} />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  );
};

export default Post;
