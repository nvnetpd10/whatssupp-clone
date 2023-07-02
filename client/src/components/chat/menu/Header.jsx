import { useContext , useState} from "react";
import { Box , styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import ChatIcon from '@mui/icons-material/Chat';


import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/Drawer";






const Component = styled(Box)`
height: 44px;
background:#cdcdcd;
padding: 8px 16px;
display:flex;
align-items: center;`
const Wrapped = styled(Box)`
margin-left: auto;
& > *{
    margin-left:2px;
    padding: 8px;
    color: #000;
};
& :first-child{
    font-size: 22px;
    margin-top: 3px;
    margin-right: 8px;
}`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
const Header = ()=>{
    const [openDrawer , setOpenDrawer] =useState(false);
    const {account} = useContext(AccountContext)
    const   toggleDrawer =()=>{
        setOpenDrawer(true);
    }
    return(
        <>
            <Component>
            <Image src ={account.picture} alt='dp' onClick={() => toggleDrawer()}/>
            <Wrapped>
            <ChatIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapped>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}
export default Header;