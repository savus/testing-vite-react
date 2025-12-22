import type { TUser } from "../types";
import "../css/user-list-btns.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "./Providers/UserInfoProvider";

export const User = ({
  user: { id, firstName },
  onDeleteClick,
}: {
  user: TUser;
  onDeleteClick: () => void;
}) => {
  const { isLoading, updateUser, setIsLoading } = useUserContext();
  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [editMode, setEditMode] = useState(false);
  const inputRow = () => {
    if (isLoading) return <span>...loading</span>;
    return <span>{firstNameInput}</span>;
  };
  return (
    <div className="user-list-btns">
      <span>{id}</span>
      {inputRow()}
      <div className="">
        <button
          disabled={isLoading}
          onClick={() => {
            setEditMode(false);
            onDeleteClick();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
