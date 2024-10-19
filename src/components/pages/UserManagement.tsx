import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, VFC, memo, useCallback, useContext, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSeletedUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(
    (id: number) => {
      console.log(
        "%c[onClickUser]",
        "color: white; background-color: orange;",
        id
      );
      console.log(
        "%c[loginUser]",
        "color: white; background-color: black;",
        loginUser
      );
      
      console.log(
        "%c[onClickUser]",
        "color: white; background-color: orange;",
        users
      );
      onSeletedUser({ id, users });
      onOpen();
    },
    [users]
  );
  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <>
          <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  id={user.id}
                  url="https://picsum.photos/800"
                  userName={user.username}
                  fullName={user.name}
                  onClickUser={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
          <UserDetailModal
            user={selectedUser}
            isAdmin={loginUser?.isAdmin}
            isOpen={isOpen}
            onClose={onClose}
          />
        </>
      )}
    </>
  );
});
