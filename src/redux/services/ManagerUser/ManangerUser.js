import axios from "axios";

export const getListUser = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
};

export const getListTaskWithUserID = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
};
