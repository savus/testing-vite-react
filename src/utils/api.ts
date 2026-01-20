import type { TOmitID, TPartialUser, TUser } from "../types";
import express from "express";

const app = express();

app.use(express.json());

const BASE_URL = "http://localhost:3000";
const headers = { "Content-Type": "application/json" };

const userEndpoints = "users";
const fetchUsers = `${BASE_URL}/${userEndpoints}`;

export const Requests = {
  getAllUsers: (): Promise<TUser[]> =>
    fetch(`${fetchUsers}`).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    }),

  postUser: (user: TOmitID): Promise<TUser> =>
    fetch(`${fetchUsers}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => response.json()),

  deleteUser: (id: string): Promise<TUser> =>
    fetch(`${fetchUsers}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    }),

  updateUser: (body: TPartialUser, id: string): Promise<TUser> =>
    fetch(`${fetchUsers}/${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    }),
};

let characters = [
  {
    id: 1,
    name: "Johnny 1",
  },
  {
    id: 2,
    name: "Johnny 2",
  },
  {
    id: 3,
    name: "Johnny 3",
  },
  {
    id: 4,
    name: "Johnny 4",
  },
];

app.get("/characters", (req, res) => {
  res.send(characters);
});

app.get("/characters/:id", (req, res) => {
  res.send(characters.find((char) => char.id === +req.params.id));
});

app.post("/characters", (req, res) => {
  characters = [...characters, req.body];
  res.status(201).send("Great success!");
});

app.listen(3000);
