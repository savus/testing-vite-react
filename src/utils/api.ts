import type { TUser } from "../types";

const BASE_URL = "http://localhost:3000";
const headers = { "Content-Type": "application/json" };
const method = "POST";

const userEndpoints = "users";
const fetchUsers = `${BASE_URL}/${userEndpoints}`;

export const Requests = {
  getAllUsers: (): Promise<TUser[]> =>
    fetch(fetchUsers).then((response) => response.json()),

  postUser: (body: Omit<TUser, "id">): Promise<TUser> =>
    fetch(fetchUsers, {
      method,
      headers,
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  editUser: (body: Partial<TUser>, id: string): Promise<TUser> =>
    fetch(`${fetchUsers}/${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  deleteUser: (id: string): Promise<TUser> =>
    fetch(`${fetchUsers}/${id}`, {
      method: "DELETE",
    }).then((response) => response.json()),
};
