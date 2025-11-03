import React from "react";

export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h4>{post.author?.username}</h4>
      <p>{post.text}</p>
      {post.imageUrl && <img src={post.imageUrl} width="200" />}
      <p>Likes: {post.likes.length}</p>
    </div>
  );
}
