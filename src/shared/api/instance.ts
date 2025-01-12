import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

// const baseURL = __IS_DEV__ ? "http://localhost:8000/" : "http://production.ru";

export const instance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || "",
  },
});
