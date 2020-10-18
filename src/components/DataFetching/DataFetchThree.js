import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handelClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      <button type="button" onClick={handelClick}>
        Fetch Post
      </button>
      {/*<ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>*/}
    </div>
  );
}
export default DataFetch;
