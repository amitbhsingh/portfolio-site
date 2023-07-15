import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavabar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavabar(false);
  }, [location]);
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={() => {
          setExpandNavabar((prev) => !prev);
        }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );

}

export default Navbar;
