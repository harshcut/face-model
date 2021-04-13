import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const auth = useSelector(
    (state: { user: { auth: boolean } }) => state.user.auth
  );

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return <div>SignIn</div>;
};

export default SignIn;
