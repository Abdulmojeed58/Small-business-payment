import React from "react";
import Input, { CheckBox } from "./Input";
import Button from "./Button";
import Link from "next/link";
import { PATHS } from "@/routes/path";
import { useLoginForm } from "@/hooks/useLoginForm";
import { useAuth } from "@/zustance/authSlice";

const Login = () => {
  const { register, setValue, handleSubmit, errors } = useLoginForm();

  const { login, auth } = useAuth();
  const { error, loading, clearError } = auth;

  const onSubmit = async (data: any) => {
    try {
      login(data);
    } catch (error) {
      console.log("error", error);
    }
    console.log(data);
    console.log(errors);
  };

  return (
    <section className="flex flex-col items-center justify-center font-Montserrat min-h-full my-20 relative z-0">
      <div className="w-[672px] max-w-[90%] mx-auto">
        <div className="mb-[74px] text-center">
          <h2 className="capitalize text-primary text-[32px] font-[700] leading-normal mb-[15px]">
            secure login
          </h2>
          <p className="text-secondary text-[20px] font-[400] leading-normal">
            It's time for business
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[10px] border border-primary border-dashed p-[24px] pt-[48px]"
          noValidate
        >
          <div className="flex flex-col gap-[40px] border-b border-dashed border-primary pb-[56px] mb-[32px]">
            <Input
              id="email"
              label="Email or Phone Number"
              type="email"
              isError={!!errors.email?.message}
              inputProps={{
                ...register("email"),
              }}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              isError={!!errors.password?.message}
              inputProps={{
                ...register("password"),
              }}
            />
          </div>
          <Button label="Secure Login" variant="contained" type="submit" loading={loading} />
        </form>
        <div className="mt-[48px] flex items-center justify-between">
          <CheckBox id="remember" label="Remember me" type="checkbox" />
          <Link
            href={PATHS.auth.forgotPassword}
            className="font-Montserrat text-lightSecondary text-[20px] font-[400] leading-normal"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-[80px]">
          <Button
            label="Create an account instead"
            variant="contained"
            type="button"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
