import {GoogleLogout} from 'react-google-login';

const clientId="824876817471-3el3ao2g80q8ao2497pfqer25u0mtts0.apps.googleusercontent.com";

function Logout(){

    const onSuccess = () => {
        console.log("Log out successfull!");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout

            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
             />
        </div>
    )
}

export default Logout;