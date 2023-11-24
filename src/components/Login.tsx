import React from "react";
import Input, { CheckBox } from "./Input";
import Button from "./Button";
import Link from "next/link";
import { PATHS } from "@/routes/path";
import { useLoginForm } from "@/hooks/useLoginForm";
import { useAuth } from "@/zustance/authSlice";
import GuestGuard from "./GuestGuide";

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
    <GuestGuard>
      <section className="flex flex-col items-center justify-center font-Montserrat min-h-full my-20 relative z-0">
        <div className="w-[672px] max-w-[90%] mx-auto">
          <div className="mb-[50px] lg:mb-[74px] text-center">
            <h2 className="capitalize text-primary text-[25px] lg:text-[32px] font-[700] leading-normal mb-[10px] lg:mb-[15px]">
              secure login
            </h2>
            <p className="text-secondary text-[15px] lg:text-[20px] font-[400] leading-normal">
              It&apos;s time for business
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[10px] border border-primary border-dashed p-[24px] pt-[48px]"
            noValidate
          >
            <div className="flex flex-col gap-[20px] lg:gap-[40px] border-b border-dashed border-primary pb-[30px] lg:pb-[56px]  mb-[20px] lg:mb-[32px]">
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
            <Button
              label={
                <div className="flex items-center gap-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M17.5 9V7C17.5 4.2 15.3 2 12.5 2C9.7 2 7.5 4.2 7.5 7V9C5.8 9 4.5 10.3 4.5 12V19C4.5 20.7 5.8 22 7.5 22H17.5C19.2 22 20.5 20.7 20.5 19V12C20.5 10.3 19.2 9 17.5 9ZM9.5 7C9.5 5.3 10.8 4 12.5 4C14.2 4 15.5 5.3 15.5 7V9H9.5V7Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                  Secure Login
                </div>
              }
              variant="contained"
              type="submit"
              loading={loading}
            />
          </form>
          <div className="mt-[48px] flex items-center justify-between">
            <CheckBox id="remember" label="Remember me" type="checkbox" />
            <Link
              href={PATHS.auth.forgotPassword}
              className="font-Montserrat text-lightSecondary text-[15px] lg:text-[20px] font-[400] leading-normal"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-[40px] lg:mt-[80px]">
            <Button
              label="Create an account instead"
              variant="contained"
              type="button"
            />
          </div>
        </div>
      </section>
    </GuestGuard>
  );
};

export default Login;
