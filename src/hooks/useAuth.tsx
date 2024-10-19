import axios from "axios";
import { useCallback, useState } from "react";
import { UserType } from "../types/api/UserType";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({...res.data, isAdmin})
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ログインに失敗しました", status: "warning" });
            setLoading(false);
          }
        })
        .catch((err) => {
          showMessage({ title: "ログインに失敗しました", status: "warning" });
          setLoading(false);
        })
        .finally(() => {
        });
    },
    [history]
  );

  return { login, loading };
};
