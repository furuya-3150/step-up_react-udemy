import { Button } from "@chakra-ui/react"
import { FC, ReactNode, memo } from "react"

type Props = {
  children: ReactNode;
  disable?: boolean;
  loading?: boolean;
  onClickLogin: () => void;
}

export const PrimaryButton: FC<Props> = memo(({children, disable=false, loading=false, onClickLogin}: Props) => {
  return (
  <Button 
    bg="teal.400"
    color="white"
    _hover={{opacity: 0.8}}
    disabled={disable}
    isLoading={loading}
    onClick={onClickLogin}
  >{children}</Button>
  )
})