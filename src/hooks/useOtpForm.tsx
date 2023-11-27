import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
};

export const useOtpForm = () => {
  const otpSchema = yup.object({
    digit1: yup.string().required(),
    digit2: yup.string().required(),
    digit3: yup.string().required(),
    digit4: yup.string().required(),
  });

  const defaultValues = {
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(otpSchema),
    defaultValues,
  });

  return { register, setValue, handleSubmit, errors };
};
