import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

export const useLoginForm = () => {
  const loginSchema = yup
    .object({
      email: yup.string().required("Email is required").matches(
        // Regular expression for email validation
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email address'
      ),
      password: yup.string().required("Password is Required"),
    })
    .required("Email and Password are required");

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  return { register, setValue, handleSubmit, errors };
};
