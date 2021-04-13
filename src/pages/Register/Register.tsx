import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Register = () => {
  const auth = useSelector(
    (state: { user: { auth: boolean } }) => state.user.auth
  );

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return <div>Register</div>;
};

export default Register;
