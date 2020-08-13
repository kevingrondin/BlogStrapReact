import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LikesContext } from "../context/LikesContext";
import Post from "../components/Post";

const SinglePost = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const { user } = useContext(UserContext);
  const { likesGiven, reloader } = useContext(LikesContext);

  const isPostAlreadyLiked = (() => {
    return likesGiven?.find((like) => like?.post.id == id);
  })();

  const [post, setPost] = useState({});
  const [loading, setloading] = useState(true);
  const [edit, setEdit] = useState(false);

  const [description, setDescription] = useState("");

  const fetchPost = async () => {
    let res = await fetch(`http://localhost:1337/posts/${id}`);
    let data = await res.json();

    setPost(data);
    setDescription(data.description);
    setloading(false);
  };
  const handleDelete = async () => {
    await fetch(`http://localhost:1337/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    });
    navigate("/");
  };
  const onSubmit = async () => {
    let response = await fetch(`http://localhost:1337/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
      body: JSON.stringify({
        description,
      }),
    });

    let data = await response.json();
    console.log(data);
    fetchPost();
  };
  const handleLike = async () => {
    try {
      await fetch(`http://localhost:1337/likes`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.jwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: +id,
        }),
      });
      fetchPost();
      reloader();
    } catch (err) {
      console.log("Exception ", err);
    }
  };
  const handleRemoveLike = async () => {
    try {
      await fetch(`http://localhost:1337/likes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      fetchPost();
      reloader();
    } catch (err) {
      console.log("Exception ", err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          {post.id && (
            <>
              <Post
                description={post.description}
                url={post.image && post.image.url}
                likes={post.likes}
              />
              {user && (
                <>
                  {isPostAlreadyLiked ? (
                    <button onClick={handleRemoveLike}>Remove Like</button>
                  ) : (
                    <button onClick={handleLike}>Like</button>
                  )}
                </>
              )}
              {user?.user && post?.author?.id === user?.user?.id && (
                <>
                  <button onClick={handleDelete}>Delete this Post</button>
                  <button onClick={() => setEdit(true)}>Edit this Post</button>

                  {edit && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="New description"
                      />
                      <button>Confirm</button>
                    </form>
                  )}
                </>
              )}
            </>
          )}
          {!post?.id && <p>404 - not found</p>}
        </>
      )}
    </div>
  );
};

export default SinglePost;
