import React, { useEffect } from "react";
import Input, { CheckBox } from "./Input";
import Button from "./Button";
import Link from "next/link";
import { PATHS } from "@/routes/path";
import { useAuth } from "@/zustance/authSlice";
import { useRegisterForm } from "@/hooks/useRegisterForm";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const { register, setValue, handleSubmit, errors } = useRegisterForm();

  const { register: signup, auth } = useAuth();
  const { error, loading, clearError } = auth;

  const onSubmit = async (data: any) => {
    try {
      // Register the user
      await signup(data);
      router.push("/auth/otp");
    } catch (error) {
      console.log("error", error);
    }

    console.log(data);
    console.log(errors);
  };

  return (
    <section className="flex flex-col items-center justify-center font-Montserrat min-h-full my-20 relative z-0">
      <div className="w-[672px] max-w-[90%] mx-auto">
        <div className="mb-[50px] lg:mb-[74px] text-center">
          <h2 className="capitalize text-primary text-[25px] lg:text-[32px] font-[700] leading-normal mb-[10px] lg:mb-[15px]">
            create an account
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
              id="firstname"
              label="Firstname"
              type="text"
              isError={!!errors.firstName?.message}
              inputProps={{
                ...register("firstName"),
              }}
            />
            <Input
              id="lastname"
              label="Lastname"
              type="text"
              isError={!!errors.lastName?.message}
              inputProps={{
                ...register("lastName"),
              }}
            />
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
              id="tel"
              label="Phone number"
              type="tel"
              isError={!!errors.phoneNumber?.message}
              inputProps={{
                ...register("phoneNumber"),
              }}
            />
            <Input
              id="age"
              label="Age"
              type="age"
              isError={!!errors.age?.message}
              inputProps={{
                ...register("age"),
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
            label="Create an account"
            variant="contained"
            type="submit"
            loading={loading}
          />
        </form>
        <div className="mt-[48px] flex items-center justify-between">
          <CheckBox id="remember" label="Remember me" type="checkbox" />
        </div>
        <div className="mt-[40px] lg:mt-[80px] px-[7px]">
          <Button
            label="Login instead"
            variant="contained"
            type="button"
            onClick={() => router.push(PATHS.auth.login)}
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
