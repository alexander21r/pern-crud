import { Link } from "react-router-dom";
import "../stylesheets/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../features/post";

const Home = () => {
  const [postsList, setPostsList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/posts");
      setPostsList(res.data);
      dispatch(fetchPosts(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletePost = async (id) => {
    try {
      if (window.confirm("Are your sure you want to delete")) {
        const res = await axios.delete(`http://localhost:3001/posts/${id}`);
        if (res.status === 200) {
          toast.success("Post deleted");
          getPosts();
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>{!postsList.length ? "No posts added yet" : ""}</h1>
      {postsList.map((post) => {
        return (
          <div key={post.id} className="card">
            <h1>Name: {post.name}</h1>
            <h1>Message: {post.description}</h1>
            <div className="buttons">
              <Link to={`update/${post.id}`}>
                <button className="btn btn-edit">Edit</button>
              </Link>
              <Link to="/">
                <button
                  className="btn btn-delete"
                  onClick={() => deletePost(post.id)}>
                  Delete
                </button>
              </Link>
              <Link to={`view/${post.id}`}>
                <button className="btn btn-view">View</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
