import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId='69790234681-6plrk3242b47lpfmhqnlcl60prl1ms9a.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
      <Messenger/>
    </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;
