import {GoogleLogout} from 'react-google-login';

const clientId = "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";


export default function Logout(){

    const onSuccess = (res)=> console.log(res)

    return(
        <div id='signInButton'>
            <GoogleLogout 
            clientId={clientId}
            buttonText="LogOut"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}