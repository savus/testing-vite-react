import { useUserContext } from "./Providers/UserInfoProvider";

export const SubmitButton = () => {
  const { isLoading } = useUserContext();
  return (
    <div className="submit-container">
      <input
        disabled={isLoading}
        className="btn btn-primary submit-btn"
        type="submit"
        value="Submit"
      />
    </div>
  );
};
