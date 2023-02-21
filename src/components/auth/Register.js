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
import React from "react";
import { DASHBOARD, LOGIN, MYDEBOOKS } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useRegister } from "hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "utils/form-validate";

export default function Register() {
  const { register: signup } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: MYDEBOOKS,
    });
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Register
        </Heading>
        <Image src="https://res.cloudinary.com/drxuutjwr/image/upload/v1675023505/Orange-Debook-Logo_llctkm.png" />
        <form onSubmit={handleSubmit(handleRegister)}>
          <FormControl isInvalid={errors.username} py="2">
            <Input
              placeholder="username"
              {...register("username", usernameValidate)}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email && errors.email.message} py="2">
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
          <Button mt="4" w="full" loadingText="Logging In" type="submit">
            Sign Up
          </Button>
        </form>

        <Text fontSize="xlg" textAlign="center">
          Already have an account?{" "}
          <Link
            as={RouterLink}
            color="#FF4227"
            fontWeight="medium"
            _hover={{ background: "#FF4227", color: "white" }}
            to={LOGIN}
          >
            Log In
          </Link>{" "}
          {""}
          instead!
        </Text>
      </Box>
    </Center>
  );
}
