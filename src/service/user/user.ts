import axiosInstance from "../axios/axiosInstance";

const USERS = "users";

export function getAllUser() {
  return axiosInstance.get(`/${USERS}`);
}
export function createUser(
  users: any
) {
  return axiosInstance
    .post(`/${USERS}`, users)
    .then((response: any) => {
      return response.data;
    })
    .catch((e) => {
      return e.data;
    });
}
