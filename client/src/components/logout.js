import { GoogleLogout } from "react-google-login";

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

function LogoutButton() { 

    const onSuccess = () => {
        console.log("Log out successful!");
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

export default LogoutButton; 
