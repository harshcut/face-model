import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { alertSnippets } from "../../utils";
import {
  Alert,
  Button,
  CheckBox,
  Footer,
  Header,
  Input,
} from "../../components";

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({ criteriaMode: "all" });
  const [loading, setLoading] = useState(false);
  const auth = useSelector(
    (state: { user: { auth: boolean } }) => state.user.auth
  );

  const onSubmit = (data: object) => {
    console.log(data);
    setLoading(true);
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="pt-6 px-5 pb-6 w-full sm:max-w-sm">
      <Header className="flex justify-center mb-10" />
      <div className="mb-3">SIGN IN WITH AN ACCOUNT</div>
      <form
        className="grid gap-3 text-base"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          placeholder="Email Address"
          type="email"
          name="email"
          ref={register({ required: true })}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        <div className="pb-3 text-sm text-custom-200">
          <CheckBox defaultChecked>Remember Me</CheckBox>
        </div>
        <Button loading={loading}>CONTINUE</Button>
      </form>
      <div className="grid gap-3 mt-3">
        {(errors?.email?.types?.required ||
          errors?.password?.types?.required) && (
          <Alert>{alertSnippets.required}</Alert>
        )}
      </div>
      <Footer at="SIGNIN" to="/register" className="text-center text-sm mt-6" />
    </div>
  );
};

export default SignIn;
