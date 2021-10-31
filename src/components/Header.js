import { Link } from "@chakra-ui/react"

import logo from '../logo.svg';

import './Header.css';

function Header() {
	return (
	    <div className="header-wrapper">
		<div className='header-container'>
			<Link className='header-item'><img className='header-logo' alt="logo" src={logo}/></Link>
			<Link className='header-item'>Dashboard</Link>
			<Link className='header-item'>Users</Link>
			<Link className='header-item'>Test</Link>
		</div>
	    </div>
	);
}

export default Header;
