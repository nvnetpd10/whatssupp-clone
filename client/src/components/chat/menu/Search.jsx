import { Box  , styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Component = styled(Box)`
background:#fff;
height : 45px;
border-bottom: 1px solid #f2f2f2;
display:flex;
align-items: center;`;

const Wrapper = styled(Box)`
background-color: #f0f2f5;
padding:relative;
margin: 0 13px;
width: 100%;
border-radius:10px;
`;
const Icon = styled(Box)`
position: absolute;
height: 100%;
padding: 6px 10px ;
color: #919191;`;

const InputField = styled(InputBase)`
width: 100%;
padding: 16px;
padding-left: 65px;
height:15px;
font-size: 14px;
`;



const Search=()=>{
    return(
        <Component>
        <Wrapper>
            <Icon>
            <SearchIcon fontSize="small" />
            </Icon>
            <InputField  placeholder="Search or Start a new Chat"/>
        </Wrapper>
        </Component>
    )
}
export default Search;