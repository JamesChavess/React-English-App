import {GoogleLogin} from 'react-google-login';

const clientId = "901135002966-atqilg0legnfg9eer5lj9iknooouqo0l.apps.googleusercontent.com";

export default function Login(){

    const onSuccess = (res)=> console.log(res.profileObj)
    const onFailure = (res)=> console.log(res)

    return(
        <div id='signInButton'>
            <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}