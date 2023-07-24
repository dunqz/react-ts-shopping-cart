import axiosInstance from "../axios/axiosInstance";

const USERS = 'users';

export function getAllUser(){
    return axiosInstance.get(`/${USERS}`);
}