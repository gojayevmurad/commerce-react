import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5000/",
});

export const Login = async (formData) =>
  await HTTP.post("/users/signin", formData);

