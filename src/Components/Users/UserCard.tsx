import type { TUser } from "../../types";

export const UserCard = ({
  userData: { firstName, lastName },
  animDelay,
}: {
  userData: TUser;
  animDelay: string;
}) => {
  type TStyles = {
    [key: `--${string}`]: string;
  };

  const styles: TStyles = {
    "--anim-delay": animDelay,
  };

  return (
    <div className="card" style={styles}>
      <h4 className="name">Jimmuseen</h4>
      <div className="details" style={{ display: "none" }}>
        <h4 className="first-name">{firstName}</h4>
        <h6 className="last-name">{lastName}</h6>
      </div>
      <div className="edit-buttons">
        <button className="btn ">Edit Mode</button>
        <button className="btn ">Delete</button>
      </div>
    </div>
  );
};
