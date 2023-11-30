import "./Fetch.css";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const Fetch = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="App">
<h1>My Fetch Api</h1>
      <div className="container">
        {posts ? (
          <div className="row">
            {posts.map((post) => {
              return (
                <div key={post.id} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card mt-5 ">
                    <div className="card-body">
                    <h4 className="card-userId"> UserId : {post.userId}</h4>
                      <h4 className="card-id"> Id : {post.id}</h4>
                      <h5 className="card-title"> Title : {post.title}</h5>
                      <p className="card-text">Body : {post.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Fetch;
