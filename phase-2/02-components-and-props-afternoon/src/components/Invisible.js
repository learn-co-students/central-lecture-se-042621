// Define a constant to capture the
// return value of our function while
// passing "props" from App.js to pull
// "name"
const Invisible = (props) => {
    return(
        <div>
            <h1>This is Invisible!</h1>
            <h2>Welcome, {props.name}</h2>
        </div>
    )
}

export default Invisible;