// Import React library along with First and Second
// Components
import React from "react";
import FirstUser from "./components/FirstUser";
import SecondUser from "./components/SecondUser";

// Define a Components constant to contain our FirstUser and
// SecondUser Components
const Users = {
    Louis: FirstUser,
    John: SecondUser
};

// "userProfile" represents the data from "userList.js" in the 
// createComponent function when it's called in "App.js"
export default userProfile => {
    // if a User with userProfile is found...
    if (Users[userProfile.name]) {
        
        // ...we will use React.createElement to create
        // a Component for it. Note that we're first passing
        // the Component we want to use followed by the props
        // that we want to pass.
        return React.createElement(Users[userProfile.name], {
            userProfile: userProfile
        });
    }
}