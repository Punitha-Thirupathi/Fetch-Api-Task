import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
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
      <div className="container">
        {posts ? (
          posts.map((post) => {
            return(
              {/* <div key={post.id} className="col-lg-3 col-md-6 col-sm-12"> */}
                <div className="card mt-3">
                  {/*   <img src="..." class="card-img-top" alt="..."> */}
                  <div className="card-body">
                    <h5 className="card-title">{posts.title}</h5>
                    <p className="card-text">{posts.body}</p>
                   {/*  <p className="card-text">
                      thumbnailUrl:{posts.thumbnailUrl}
                    </p> */}
                  </div>
                {/* </div> */}
              </div>;
           ) })
       
        ) : (
          <Loading />
        )}
      </div>
    </div> 
  );
        }

export default Fetch;
