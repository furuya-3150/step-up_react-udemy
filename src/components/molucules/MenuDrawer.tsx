import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void 
  onClickUserManagement: () => void 
  onClickSetting: () => void 
}

export const MenuDrawer: FC<Props> = ({onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting}: Props) => {
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button width="100%" onClick={onClickHome}>TOP</Button>
          <Button width="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
          <Button width="100%" onClick={onClickSetting}>設定</Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  )
}