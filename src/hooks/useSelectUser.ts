import { useCallback, useState } from "react";
import { UserType } from "../types/api/UserType";

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  type Props = {
    id: number;
    users: Array<UserType>;
  };
  const onSeletedUser = useCallback(({ id, users }: Props) => {
    console.log(
      "%c[id, user]",
      "color: white; background-color: blue;",
      id,
      users
    );
    const user = users.find((user) => id === user.id);

    console.log(
      "%c[onSelectedUser]",
      "color: white; background-color: blue;",
      user
    );
    setSelectedUser(user!);
  }, []);

  return { onSeletedUser, selectedUser };
};
