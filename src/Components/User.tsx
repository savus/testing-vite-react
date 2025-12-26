import type { TUser } from "../types";
import "../css/user-list-btns.css";
import { useState } from "react";
import { useUserContext } from "./Providers/UserInfoProvider";

export const User = ({ user: { id, firstName } }: { user: TUser }) => {
  const {
    isLoading,
    allUsers,
    setAllUsers,
    updateUserOpt,
    setIsLoading,
    deleteUser,
    deleteUserOpt,
  } = useUserContext();
  const [firstNameInput, setFirstNameInput] = useState(firstName);
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
      <div>
        <div>First Name:{firstName}</div>
        <div>Input:{firstNameInput}</div>
      </div>
      <span>{id}</span>
      {inputRow()}
      <div className="">
        <button
          onClick={() => {
            setEditMode(!editMode);
            if (editMode) {
              updateUserOpt({ firstName: firstNameInput }, id);
            }
          }}
        >
          Edit
        </button>
        <button
          disabled={isLoading}
          onClick={(e) => {
            e.preventDefault();
            setEditMode(false);
            deleteUserOpt(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
