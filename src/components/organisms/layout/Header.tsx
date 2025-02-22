import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MemuIconButton";
import { MenuDrawer } from "../../molucules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), [history])
  const onClickUserManagement = useCallback(() => history.push("/home/user_management"), [history])
  const onClickSetting = useCallback(() => history.push("/home/setting"), [history])
  return (
    <>
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}} onClick={onClickHome}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg"}}>
          ユーザー管理アプリ
        </Heading>
      </Flex>
      <Flex align="center" fontSize="sm" flexGrow={2} display={{base: "none", md: "flex"}} >
        <Box pr={4}>
          <Link onClick={onClickUserManagement} to={"/home/user_management"}>ユーザー一覧</Link>
        </Box>
        <Link onClick={onClickSetting} to={"/home/setting"}>設定</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen}/>
    </Flex>
    <MenuDrawer
     onClose={onClose}
     isOpen={isOpen}
     onClickHome={onClickHome}
     onClickUserManagement={onClickUserManagement}
     onClickSetting={onClickSetting}
     />
    </>
  )
})