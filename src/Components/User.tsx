import { useState } from "react";
import type { TUser } from "../types";
import "../css/user-list-btns.css";
import { useUserContext } from "./Providers/UserInfoProvider";
import toast from "react-hot-toast";

export const User = ({ user: { id, firstName } }: { user: TUser }) => {
  const { updateUser, deleteUser, isLoading, setIsLoading } = useUserContext();
  const [editMode, setEditMode] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState(firstName);

  const isEditable = () => (editMode ? "edit-mode" : "");
  return (
    <li className={`user-list-btns ${isEditable()}`}>
      id: ${id}
      <div className="input-container">
        {editMode ? (
          <input
            type="text"
            value={firstNameInput}
            className="btn"
            onChange={({ target: { value } }) => setFirstNameInput(value)}
          />
        ) : (
          <span>{isLoading ? "loading..." : firstNameInput}</span>
        )}
      </div>
      <button
        onClick={() => {
          setEditMode(!editMode);
          if (editMode)
            updateUser({ firstName: firstNameInput }, id)
              .then(() => {
                toast.success(`User ${id} successfully updated!`);
              })
              .catch((e) => toast.error(e))
              .finally(() => {
                setIsLoading(false);
              });
        }}
        disabled={isLoading}
      >
        Edit
      </button>
      <button
        disabled={isLoading}
        onClick={() => {
          deleteUser(id)
            .then(() => {
              toast.success(`User ${id} successfully deleted!`);
            })
            .catch((e) => toast.error(e))
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        Delete
      </button>
    </li>
  );
};
