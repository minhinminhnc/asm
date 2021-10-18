
import signinInstance from "./signinInstance";

export const signup = (user) => {
  const url = `/register`;
  return signinInstance.post(url, user);
};
export const signin = (user) => {
  const url = `/signin`;
  return signinInstance.post(url, user);
};