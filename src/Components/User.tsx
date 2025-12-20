import type { TUser } from "../types";

export const User = ({
  user: { id, firstName, lastName },
}: {
  user: TUser;
}) => {
  return (
    <li
      key={id}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      id: ${id} - {firstName}:{lastName}
      <button
        style={{
          width: "100px",
        }}
      >
        Edit
      </button>
      <button
        style={{
          width: "100px",
        }}
      >
        Delete
      </button>
    </li>
  );
};
