import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '20px',
  margin: '0 6px',
  background: 'red',
  textDecoration: 'none',
  textAlign: 'center',
  color: 'white',
}

const NavBar = props => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item" href="/">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </a>

      {/* Add NavLinks for NavBar for easier navigation */}
      <NavLink to="/" style={link}>
        Home
      </NavLink>
      <NavLink to="/paintings" style={link}>
        Paintings
      </NavLink>
      <NavLink to="/about" style={link}>
        About
      </NavLink>
    </div>
  );
};

export default NavBar;
