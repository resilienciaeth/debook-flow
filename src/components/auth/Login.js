import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MYDEBOOKS, REGISTER } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utils/form-validate";

export default function Login() {
  const { login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    login({
      email: data.email,
      password: data.password,
      redirectTo: MYDEBOOKS,
    });
  }

  const [user, setUser] = useState(null);

  return (
    <div className="h-screen">
      <div className="h-full login-bg">
        <div className=" h-[35%] flex flex-col items-center justify-center">
          <div className="flex flex-row items-center space-x-4">
            <p className="text-white">Don't have an account?</p>
            <RouterLink to={REGISTER}>
              <button className="bg-[#E49489] text-white rounded-lg p-3">
                Register
              </button>
            </RouterLink>
          </div>
          <img
            className="mt-10"
            alt="logo"
            src="https://res.cloudinary.com/drxuutjwr/image/upload/v1677246434/LOGO_z0ezpp.png"
          />
        </div>
        <div className="rounded-t-2xl bg-white h-[65%] px-3">
          <div className="flex flex-col items-center justify-start py-10">
            <h1 className="text-debook-2 text-[35px] font-bold">
              Welcome Back
            </h1>
            <p className="text-[#848484] text-[16px]">
              Enter your details below
            </p>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl
              isInvalid={errors.email && errors.email.message}
              py="2"
            >
              <Input
                type="email"
                placeholder="user@gmail.com"
                {...register("email", emailValidate)}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password} py="2">
              <Input
                type="password"
                placeholder="password"
                {...register("password", passwordValidate)}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <button
              className="mt-4 w-full bg-[#E85A46] p-3 rounded-lg text-white"
              loadingText="Logging In"
              type="submit"
            >
              Login
            </button>
          </form>

          <Text fontSize="xlg" textAlign="center">
            Don't have an account?{" "}
            <Link
              as={RouterLink}
              color="#FF4227"
              fontWeight="medium"
              _hover={{ background: "#FF4227", color: "white" }}
              to={REGISTER}
            >
              Register
            </Link>{" "}
            {""}
            instead!
          </Text>
        </div>
      </div>
    </div>
  );
}
