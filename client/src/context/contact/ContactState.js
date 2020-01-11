import React ,{useReducer,useContext}from 'react';
// import uuid from 'uuid';
import axios from 'axios';
// import authContext from '../auth/authContext';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
	GET_CONTACTS,
	CLEAR_CONTACTS

}from '../types';

const ContactState=props=>{
	const initialState={
		contacts:null,
		current:null,
		filtered:null,
		error:null
	};

	const [state,dispatch]=useReducer(contactReducer,initialState);
// const authcontext=useContext(authContext);
	//// addcontact
	const addcontact=async(contact)=>{ 
 const config={
	 headers:{
		 'Content-Type':'application/json'
	 }
 }
try {
	const res =await axios.post('/api/contacts',contact,config);
dispatch({type:ADD_CONTACT,payload:res.data});
	
} catch (err) {
	dispatch({type:CONTACT_ERROR,payload:err.response.data.msg});
}
	};
	
const getcontacts=async()=>{
	try {
		console.log("before contacts state call");
		const res=await axios.get('/api/contacts');
		console.log(res);
		dispatch({type:GET_CONTACTS,payload:res.data})
	} catch (err) {
		dispatch({type:CONTACT_ERROR,payload:err.response.msg});
	}
};
	//delete contact
	const deletecontact= async (id)=>{ 
		try {
const res=await axios.delete(`/api/contacts/${id}`);
			console.log(res);

dispatch({
	type:DELETE_CONTACT,
	payload:id
	});
	
} catch (err) {
	dispatch({
		type:CONTACT_ERROR,
		payload:err.response.data.msg
		});
}
	                 };
	//updatecontact
	const updatecontact=async (contact)=>{
		const config={
	 headers:{
		 'Content-Type':'application/json'
	 }
 };
try {
	const res =await axios.put(`/api/contacts/${contact._id}`,contact,config);
	console.log(res);
		dispatch({type:UPDATE_CONTACT,payload:res.data});

	
} catch (err) {
	dispatch({type:CONTACT_ERROR,payload:err.response.data.msg});
}

	};

	//editcontact
	const editcontact=(contact)=>{ 
dispatch({type:SET_CURRENT,payload:contact});

	};
	//clearcurrent
	const clearcurrent=()=>{
		dispatch({type:CLEAR_CURRENT});
	};
	
	/// filter_contacts
	const filtercontacts=(text)=>{
dispatch({type:FILTER_CONTACTS,payload:text});
	};

	//clear filtercontacts
const clearfilter=()=>{
	dispatch({type:CLEAR_FILTER});
};
const clearcontacts=()=>{
	dispatch({type:CLEAR_CONTACTS});
}

	//
	//
	return(
		<ContactContext.Provider value={{
			contacts:state.contacts,
			current:state.current,
			filtered:state.filtered,
			addcontact,
			deletecontact,
			editcontact,
			clearcurrent,
			updatecontact,
	    filtercontacts,
	    clearfilter,
			getcontacts,
			clearcontacts,
			deletecontact
		}}>
		{props.children}
		</ContactContext.Provider>

	);
};

export default ContactState;