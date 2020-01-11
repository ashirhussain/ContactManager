import React,{useContext,useEffect} from 'react'
import Contacts from '../contact/Contacts';
import Contactform from '../contact/Contactform';
import Contactfilter from '../contact/Contactfilter'
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authcontext=useContext(AuthContext);

	useEffect(()=>{
		authcontext.loaduser();
	},[]);
	return (
		<div className="grid-2">
		<Contactform/ >
		<Contactfilter/>
			<Contacts/>
		</div>
	)
}
export default Home;