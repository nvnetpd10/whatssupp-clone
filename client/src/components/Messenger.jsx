import { useContext } from 'react';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { AccountContext } from '../context/AccountProvider';
import { Box } from '@mui/system';
import LoginDialog from './account/LoginDialog';
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`height: 100bh;
background-color:#DCDCDC;`

const Header = styled(Appbar)`height: 125px;
background-color: #00bfa5;
box-shadow: none;`

const LoginHeader = styled(Appbar)`height: 220px;
background-color: #00bfa5;
box-shadow: none;`

const Messenger = ()=>{
    const {account} = useContext(AccountContext);
    return(
        <Component>
        {
            account ? 
            <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog/>
            </>
            
            :
            <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog/>
            </>
        }
    
        </Component>
    )
}
export default Messenger