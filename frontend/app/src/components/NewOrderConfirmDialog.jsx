import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { OrderButton } from "./Buttons/OrderButton"

export const NewOrderConfirmDialog = (props) => {
  const {
    isOpen,
    onClose,
    existingResutaurautName,
    newResutaurautName,      
    onClickSubmit,    
    } = props

  return(
   <Dialog
    open = {isOpen}
    onClose = {onClose}
    maxWidth = "xs"
   >
    <DialogTitle>
      新規注文を開始しますか？
    </DialogTitle>
    <DialogContent>
      <p>
        {
           `ご注文に ${existingResutaurautName} の商品が含まれています。
           新規の注文を開始して ${newResutaurautName} の商品を追加してください。`
        }
      </p>
      <OrderButton onClick={onClickSubmit}>
        新規注文
      </OrderButton>
    </DialogContent>
   </Dialog>
  )
}