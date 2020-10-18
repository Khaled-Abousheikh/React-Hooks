import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setPost(res.data);
        setErr("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPost({});
        setErr("Somthing went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "loading ... " : post.title}
      {err ? err:null}
    </div>
  );
}
export default DataFetch;
