import {GoogleLogin} from 'react-google-login';

const clientId="824876817471-3el3ao2g80q8ao2497pfqer25u0mtts0.apps.googleusercontent.com";

function Login(){

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ",res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res:",res);
    }
    return(
        <div id="signInButton">
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={"single_host_origin"}
    isSignedIn={true}
    />
        </div>
    )
}

export default Login;