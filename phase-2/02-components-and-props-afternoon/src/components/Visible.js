// We need to import the React Library
// in order to access the React.Component 
// in our class definition below
import React from "react";

// CLASS COMPONENT FORMAT
class Visible extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Visible!</h1>
            </div>
        )
    }
}

// FUNCTION COMPONENT FORMAT
// const Visible = () => {
//     return(
//         <div>
//             <h1>This is Visible!</h1>
//         </div>
//     )
// }

// export default is used here to export 
// a single function from our Component file
// Further Reading: https://stackoverflow.com/a/56965218
export default Visible;