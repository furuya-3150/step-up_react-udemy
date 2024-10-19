import { Box, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { UserType } from "../../../types/api/UserType";
import { PrimaryButton } from "../../atoms/button/PrimayButton";

type Props = {
  user: UserType | null;
  isAdmin?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo(({ user, isAdmin, isOpen, onClose}: Props) => {
  const [userName, setUserName] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {setUserName(e.target.value)}
  const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {setUserFullName(e.target.value)}
  const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {setUserMail(e.target.value)}
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {setUserPhone(e.target.value)}
  const onClickUpdate = () => {
    
  }

  useEffect(() => {
    setUserName(user?.username ?? '');
    setUserFullName(user?.name ?? '');
    setUserMail(user?.email ?? '');
    setUserPhone(user?.phone ?? '');
  }, [user])

  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    autoFocus={false}
    motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent pb={2}>
      <ModalHeader>ユーザー詳細</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input value={userName} onChange={onChangeName} isReadOnly={!isAdmin} />
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input value={userFullName} onChange={onChangeFullName} isReadOnly={!isAdmin} />
          </FormControl>
          <FormControl>
            <FormLabel>MAIL</FormLabel>
            <Input value={userMail} onChange={onChangeMail} isReadOnly={!isAdmin} />
          </FormControl>
          <FormControl>
            <FormLabel>Tell</FormLabel>
            <Input value={userPhone} onChange={onChangePhone} isReadOnly={!isAdmin} />
          </FormControl>
        </Stack>
        <ModalFooter>
          <PrimaryButton onClickLogin={onClickUpdate}>更新</PrimaryButton>
        </ModalFooter>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
})