import { http } from "./http-common";

export const signUp = () => {
  return http.post("users/signup");
};

export const logIn = () => {
  return http.post("users/login");
};

export const logOut = () => {
  return http.post("users/logout");
};

export const getUserCurrent = () => {
  return http.get("users/current");
};

export const getContacts = () => {
  return http.get("contacts");
};

export const addContact = (data) => {
  return http.post("contacts", data);
};

export const removeContact = (id) => {
  return http.delete(`contacts/${id}`);
};

export const patchContact = (id) => {
  return http.patch(`contacts/${id}`);
};
