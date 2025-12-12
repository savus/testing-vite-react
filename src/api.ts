import type { TNote, TUser } from "./types";

const BASE_URL = "http://localhost:3000";
const notesEndpoint = "notes";
const usersEndpoint = "users";

export const Requests = {
  createNote: ({ title, content }: { title: string; content: string }) =>
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then((data) => data.json())
      .then(console.log),

  getAllNotes: (): Promise<TNote[]> =>
    fetch(`${BASE_URL}/${notesEndpoint}`).then((response) => response.json()),

  getAllUsers: (): Promise<TUser[]> =>
    fetch(`${BASE_URL}/${usersEndpoint}`).then((response) => {
      console.log("running");
      return response.json();
    }),

  createUser: (user: Omit<TUser, "id">) =>
    fetch(`${BASE_URL}/${usersEndpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(console.log),
};

// const createNoteNTS = ({ title, content }) =>
//   fetch("http://localhost:3000/notes", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title,
//       content,
//     }),
//   })
//     .then((data) => data.json())
//     .then(console.log);
