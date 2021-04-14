import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { alertSnippets, typeChecks } from "../../utils";
import {
  Alert,
  Button,
  CheckBox,
  Footer,
  Header,
  Input,
} from "../../components";

const Register = () => {
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
      <div className="mb-3">SIGN UP FOR AN ACCOUNT</div>
      <form
        className="grid gap-3 text-base"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex gap-3">
          <Input
            placeholder="First Name"
            autoCapitalize
            name="first_name"
            ref={register({ required: true })}
          />
          <Input
            placeholder="Last Name"
            autoCapitalize
            name="last_name"
            ref={register({ required: true })}
          />
        </div>
        <Input
          placeholder="Email Address"
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern: typeChecks.email,
          })}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          ref={register({
            required: true,
            pattern: typeChecks.password,
          })}
        />
        <div className="pb-3 text-sm text-custom-200">
          <CheckBox>Don't Share My Data</CheckBox>
        </div>
        <Button loading={loading}>CONTINUE</Button>
      </form>
      <div className="grid gap-3 mt-3">
        {errors?.email?.type === "pattern" && (
          <Alert type="warning" className="text-base">
            {alertSnippets.email}
          </Alert>
        )}
        {errors?.password?.type === "pattern" && (
          <Alert type="warning" className="text-base">
            {alertSnippets.password}
          </Alert>
        )}
        {(errors?.first_name?.types?.required ||
          errors?.last_name?.types?.required ||
          errors?.email?.types?.required ||
          errors?.password?.types?.required) && (
          <Alert>{alertSnippets.required}</Alert>
        )}
      </div>
      <Footer at="REGISTER" to="/" className="text-center text-sm mt-6" />
    </div>
  );
};

export default Register;
