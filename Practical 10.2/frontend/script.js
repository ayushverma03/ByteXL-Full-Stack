const API = "http://localhost:5000/api/posts";

async function loadPosts() {
  const res = await fetch(API);
  const posts = await res.json();
  document.getElementById("posts").innerHTML = posts
    .map(p => `<h3>${p.title}</h3><p>${p.content}</p><hr>`)
    .join("");
}

document.getElementById("postForm").addEventListener("submit", async e => {
  e.preventDefault();
  const post = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value
  };
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  });
  loadPosts();
});

loadPosts();
