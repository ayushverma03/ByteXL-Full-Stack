import React, { useState } from "react";
import api from "../services/api";

export default function CreatePost({ onPost }) {
  const [text, setText] = useState("");

  const handlePost = async () => {
    const token = localStorage.getItem("token");
    await api.post("/posts", { text }, { headers: { Authorization: `Bearer ${token}` } });
    setText("");
    onPost();
  };

  return (
    <div>
      <textarea placeholder="Write something..." value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}
