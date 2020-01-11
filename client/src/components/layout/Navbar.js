import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import contactContext from '../../context/contact/contactContext';

const Navbar = ({title,icon}) => {

const authcontext=useContext(authContext);
const {isAuthenticated,user,logout}=authcontext;
const contactcontext=useContext(contactContext);
const Logout=()=>{
logout();
contactcontext.clearcontacts();
}
	const authuserlinks=(
		<Fragment>
		
		<li>
		{user&&user.name}
		</li>
		<li><a href='#!' onClick={Logout}>logout</a></li>
		
		</Fragment>
	);
	const guestuserlinks=(
		<Fragment>

			 <li>
			 <Link to='/'>Home</Link>
			 </li>
			 <li>
			 <Link to='/about'>About</Link>
			 </li>
			  <li>
			 <Link to='/register'>Register</Link>
			 </li>
			  <li>
			 <Link to='/login'>Login</Link>
			 </li>

		</Fragment>
	);
	return (
		<div className="navbar bg-dark">
		<h1>
		<i className={icon}/>{title}
		</h1><ul>
			{isAuthenticated ?authuserlinks:guestuserlinks}
		</ul>
		</div>
	)
}
Navbar.propTypes={
	title:PropTypes.string.isRequired,
	icon:PropTypes.string
}
Navbar.defaultProps={
title:' contact manager',
icon:'fas fa-address-book'

}
export default Navbar;

