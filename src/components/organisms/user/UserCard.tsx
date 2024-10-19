import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  url: string;
  userName: string;
  fullName: string;
  onClickUser: (id: number) => void;
}

export const UserCard: FC<Props> = memo(({ id, url, userName, fullName, onClickUser }: Props) => {
  return (
    <Box
    w={260}
    h={260}
    bg={"white"}
    borderRadius={10}
    shadow={"md"}
    p={4}
    _hover={{ cursor: "pointer", opacity: 0.8}}
    onClick={() => onClickUser(id)}
    >
      <Stack textAlign={"center"}>
        <Image
          boxSize={160}
          borderRadius={"full"}
          src={url}
          alt="ユーザープロフィール画像"
          m={"auto"}
         />
         <Text fontSize="lg" fontWeight="bold">
          {userName}
         </Text>
         <Text fontSize="sm" color="gray">
          {fullName}
         </Text>
      </Stack>
  </Box>
  )
})