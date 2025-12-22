import type { TOmitID, TPartialUser, TUser } from "../types";

const BASE_URL = "http://localhost:3000";
const headers = { "Content-Type": "application/json" };

const userEndpoints = "users";
const fetchUsers = `${BASE_URL}/${userEndpoints}`;

export const Requests = {
  getAllUsers: (): Promise<TUser[]> =>
    fetch(`${fetchUsers}`).then((response) => response.json()),

  postUser: (user: TOmitID): Promise<TUser> =>
    fetch(`${fetchUsers}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => response.json()),

  deleteUser: (id: string): Promise<TUser> =>
    fetch(`${fetchUsers}/${id}`, {
      method: "DELETE",
    }).then((response) => response.json()),

  updateUser: (body: TPartialUser, id: string): Promise<TUser> =>
    fetch(`${fetchUsers}/${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    }).then((response) => response.json()),
};
