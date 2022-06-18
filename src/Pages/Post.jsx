import React from "react";
import { useLocation } from "react-router-dom";
import { posts } from "../Data";
const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);
  console.log(location);
  // const post = posts[2];
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
