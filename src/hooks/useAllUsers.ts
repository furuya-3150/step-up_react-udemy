import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import axios from "axios";
import { UserType } from "../types/api/UserType";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<UserType>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<UserType>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        showMessage({ title: "失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
};
