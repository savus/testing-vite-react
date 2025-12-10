const createNote = ({ title, content }: { title: string; content: string }) =>
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
    }),
  })
    .then((data) => data.json())
    .then(console.log);
