import {useContext} from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import { styled } from '@mui/system';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { qrCodeImage } from '../../constants/data';
import { addUser } from '../../service/api';


const Component = styled(Box)`display: flex;
`
const Container = styled(Box)`padding: 56px 0 56px 56px;
`
const QRcode = styled('img')({
    height:264,
    width:264,
    margin: '50px 0 0  50px'
});
const Title = styled(Typography)`
font-size: 26px;
color:#525252;
font-weight:300;
ont-family: inherit;
margin-bottom: 25px;
`
const StyledList = styled(List)`
& > li {
    padding: 0;
    margin-top: 15px;
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
}`
const dialogstyle = {
    height: '90%',
    marginTop: '12%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden'
}

const LoginDialog = ()=>{

    const { setAccount} = useContext(AccountContext);
    const onLoginSuccess = async(res) =>{
        const decoded = jwt_decode(res.credential);
        
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError = (res) =>{
        console.log("login failed" , res);

    }
    return(
        <Dialog
        open={true}   
        PaperProps={{ sx: dialogstyle}}
        hideBackDrop={true}
        >
        <Component>
        <Container>
            <Title>To Use Whatsupp on your computer</Title>
            <StyledList>
                <ListItem>
                    1 . Open Whatsupp on your phone
                </ListItem>
                <ListItem>
                    2 . Tap menu Settings and select Whatsupp web
                </ListItem>
                <ListItem>
                    3 . Point your phone to this screen to capture the code
                </ListItem>
            </StyledList>
        </Container>
        <Box style = {{position: 'relative'}}>
        <QRcode src={qrCodeImage} alt='OR code'/>
        <Box style = {{position: 'absolute' , top: '30%' , transform:'translateX(25%)'}}>
            <GoogleLogin
                onSuccess={onLoginSuccess}
                onError= {onLoginError}
            />
        </Box>
        </Box>
        </Component>


        </Dialog>
    )
}
export default LoginDialog