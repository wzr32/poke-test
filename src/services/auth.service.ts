import { ApiLocal } from "@/config/client";
import { AxiosError, AxiosResponse } from "axios";
import { LoginType, RegisterType } from "@/schemas";
import { User } from "@/types";
import { handleGetLocalData, handleSetLocalData } from "@/utilities";
import { FAKE_JWT } from "@/config/constants";

const userLogin = (data: User[], user: LoginType) => {
  const finded = data.filter((elem) => elem.email === user.email)[0];

  if (!finded) {
    throw { message: "User not found" };
  }

  if (finded.password !== user.password || finded.email !== user.email) {
    throw { message: "Invalid Email or Password" };
  }

  const userData = { id: finded.id, email: finded.email };
  handleSetLocalData({ token: FAKE_JWT, user: userData });
};

export const loginService = async (
  body: LoginType,
  onSuccess: (response?: AxiosResponse) => void,
  onError: (error?: AxiosError) => void
): Promise<void> => {
  try {
    const { data } = await ApiLocal.get("/users");
    userLogin(data, body);
    onSuccess(data);
  } catch (err) {
    onError(err as AxiosError);
  }
};

export const registerService = async (
  body: Omit<RegisterType, "c_password">,
  onSuccess: (response?: AxiosResponse) => void,
  onError: (error?: AxiosError) => void
): Promise<void> => {
  try {
    const { data: users } = await ApiLocal.get("/users");
    const user = users.filter((elem: User) => elem.email === body.email)[0];

    if (user) throw { message: "Email on use. Choose another one" };

    const data = await ApiLocal.post("/users", body);
    onSuccess(data);
  } catch (err) {
    onError(err as AxiosError);
  }
};

export const getUserDataWithID = async (): Promise<User | null> => {
  const localData = handleGetLocalData();

  const { data } = await ApiLocal.get("/users");
  const finded = data.filter((elem: User) => elem.id === localData?.user.id)[0];

  if (finded === undefined) return null;
  return finded;
};
