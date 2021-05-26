const Header = (props) => {
    return(
        <div className="App">
            <h1>This is my Header component.</h1>
            <h2>Welcome, {props.name}</h2>
        </div>
    )
}

export default Header;
