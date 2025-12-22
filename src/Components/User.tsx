import type { TUser } from "../types";
import "../css/user-list-btns.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "./Providers/UserInfoProvider";

export const User = ({ user: { id, firstName } }: { user: TUser }) => {
  const { isLoading, updateUser, setIsLoading, deleteUser } = useUserContext();
  const [firstNameInput, setFirstNameInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const inputRow = () => {
    if (isLoading) return <span>...loading</span>;

    if (editMode)
      return (
        <input
          type="text"
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
        />
      );
    return <span>{firstNameInput}</span>;
  };
  return (
    <div className="user-list-btns">
      <span>{id}</span>
      {inputRow()}
      <div className="">
        <button
          onClick={(e) => {
            e.preventDefault();
            setEditMode(!editMode);
          }}
        >
          Edit
        </button>
        <button
          disabled={isLoading}
          onClick={(e) => {
            e.preventDefault();
            setEditMode(false);
            deleteUser(id)
              .then(() => {
                toast.success("user has been deleted!");
              })
              .catch((e) => {
                toast.error(e.message);
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            updateUser({ firstName: firstNameInput }, id)
              .then(() => {
                toast.success("User updated!");
              })
              .catch((e) => {
                toast.error(e.message);
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
