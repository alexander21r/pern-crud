import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../stylesheets/View.css";

const View = () => {
  const [post, setPost] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getSinglePost(id);
  }, [id]);

  const getSinglePost = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3001/posts/${id}`);
      if (res.status === 200) {
        setPost(res.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <p>Info</p>
        </div>
        <div className="container">
          {" "}
          <strong>Name:</strong>
          <span>{post.name}</span>
          <br />
          <br />
          <strong>Message:</strong>
          <span>{post.description}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
