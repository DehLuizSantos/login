import { UseFormReturnType } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useAxiosContext } from "../axios";

export type LoginType = {
  login: string;
  senha: string;
};

export const useLogin = () => {
  const axios = useAxiosContext();

  const navigate = useNavigate();
  const Login = async (form: UseFormReturnType<LoginType>) => {
    try {
      if (form.validate().hasErrors) {
        return;
      }
      const { data } = await axios.post(`/login`, form.values);
      if (data.status === 200) {
        console.log(data);
        navigate("/boasvindas");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { Login };
};
