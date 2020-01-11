import React,{Fragment,useContext,useEffect} from 'react';
import Contactitems from './Contactitems';
// import Contactfilter from './Contactfilter';
import contactContext from '../../context/contact/contactContext';
// import authContext from '../../context/auth/authContext';

import Spinner from '../layout/Spinner';

const Contacts = () => {
	const contactcontext=useContext(contactContext);
	// const authcontext=useContext(authContext);

	// const {loading}=authcontext;

	const {contacts,filtered,getcontacts,loading}=contactcontext;
	useEffect(()=>{
getcontacts();
console.log('useEffect called')
//eslint-disable-next-line
	},[]);
	 
	if(contacts!==null&&contacts.length===0&&!loading){
		return<h4>please add contacts</h4>
	}
	return (
		<Fragment>
		{	contacts!==null && !loading ?
		 (
	filtered!==null ? filtered.map(contact=>(<Contactitems key={contact._id} contact={contact}/>)) :
	contacts.map(contact=>(<Contactitems key={contact._id} contact={contact}/>))
		 )
	:
<Spinner/>
}


		</Fragment>
	);
};
export default Contacts;