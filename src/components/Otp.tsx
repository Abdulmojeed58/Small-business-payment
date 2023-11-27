import React, { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAuth } from "@/zustance/authSlice";
import { useRouter } from "next/router";
import { PATHS } from "@/routes/path";
import { useOtpForm } from "@/hooks/useOtpForm";

const Otp = () => {
  const { auth, otp } = useAuth();
  const { isRegister, currentEmail, isOtpSuccess, loading } = auth;
  const router = useRouter();
  const { register, setValue, handleSubmit, errors } = useOtpForm();

  useEffect(() => {
    if (!isRegister) {
      router.push(PATHS.auth.register);
    }
  }, []);

  useEffect(() => {
    if (isOtpSuccess) {
      router.push(PATHS.auth.login);
    }
  }, [isOtpSuccess]);

  const onSubmit = async (data: any) => {
    console.log(data);
    const otpData = `${data.digit1}${data.digit2}${data.digit3}${data.digit4}`;
    try {
      await otp(otpData);
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <section className="flex flex-col items-center justify-center font-Montserrat min-h-[calc(100vh-305px)] relative z-0 my-20">
      <div className="w-[672px] max-w-[90%] mx-auto px-[24px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-[24px] lg:gap-[41px]"
        >
          <h2 className="capitalize text-primary text-[25px] lg:text-[32px] font-[600] lg:font-[700] leading-normal">
            OTP
          </h2>
          <p className="text-secondary text-[15px] lg:text-[20px] font-[400] leading-normal">
            We sent a code to {currentEmail || ""}
          </p>
          <div className="flex gap-[30px] lg:gap-[52px]">
            <Input
              id=""
              type="text"
              isError={false}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
              inputProps={{
                ...register("digit1"),
                maxLength: 1,
              }}
            />
            <Input
              id=""
              type="text"
              isError={false}
              inputProps={{
                ...register("digit2"),
                maxLength: 1,
              }}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
            />
            <Input
              id=""
              type="text"
              isError={false}
              inputProps={{
                ...register("digit3"),
                maxLength: 3,
              }}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
            />
            <Input
              id=""
              type="text"
              isError={false}
              inputProps={{
                ...register("digit4"),
                maxLength: 4,
              }}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
            />
          </div>
          <Button
            label="Continue"
            variant="contained"
            type="submit"
            loading={loading}
          />
        </form>
      </div>
    </section>
  );
};

export default Otp;
