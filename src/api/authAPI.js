
import signinInstance from "./signinInstance";

export const signup = (user) => {
  const url = `/Users`;
  return signinInstance.post(url, user);
};
export const signin = () => {
  const url = `/Users`;
  return signinInstance.get(url);
};
