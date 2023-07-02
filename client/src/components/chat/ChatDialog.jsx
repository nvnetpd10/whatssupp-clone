import { Dialog  , Box , styled} from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
const dialogstyle = {
    height: '90%',
    width: '100%',
    margin: '20px',
    borderRadius: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden'
}
const Component =  styled(Box)`
display: flex;`
const LeftComponent = styled(Box)`
min-width:450px`
const RightComponent = styled(Box)`
min-width:360px;
width: 70%;
height: 100%;
border-left: 1px solid rgba(0 , 0 , 0 , 0.14);`
const ChatDialog = () =>{
    return(
        <Dialog
            open={true}
            PaperProps={{sx: dialogstyle}}
            hideBackDrop={true}
            maxWidth={'md'}>
            <Component>
                <LeftComponent>
                <Menu/>
                </LeftComponent>
                <RightComponent>
                <EmptyChat/>
                </RightComponent>
            </Component>
        </Dialog>
        
    )
}
export default ChatDialog;