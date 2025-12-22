import type { TUser } from "../types";
import "../css/user-list-btns.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "./Providers/UserInfoProvider";

export const User = ({ user: { id, firstName } }: { user: TUser }) => {
  const { updateUser, isLoading, setIsLoading } = useUserContext();
  const [firstNameInput, setFirstNameInput] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setFirstNameInput(firstName);
  }, []);

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
          disabled={isLoading}
          onClick={() => {
            setEditMode(!editMode);
            if (editMode) {
              updateUser({ firstName: firstNameInput }, id)
                .then(() => {
                  toast.success("User updated!");
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }
          }}
        >
          Edit
        </button>
        <button disabled={isLoading}>Delete</button>
      </div>
    </div>
  );
};
