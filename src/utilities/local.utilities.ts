import { IAuthUserToken } from "@/interfaces";

const USER_KEY = "user_test";

export const handleSetLocalData = (body: IAuthUserToken) => {
  const data = JSON.stringify(body);
  const local = localStorage.getItem(USER_KEY);

  if (!local) localStorage.setItem(USER_KEY, data);
  localStorage.setItem(USER_KEY, data);
};

export const handleGetLocalData = (): IAuthUserToken | null => {
  const local = localStorage.getItem(USER_KEY);
  if (!local) return null;
  return JSON.parse(local) as IAuthUserToken;
};

export const handleRemoveLocalData = () => {
  localStorage.removeItem(USER_KEY);
};
