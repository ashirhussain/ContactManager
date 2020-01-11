import React ,{useReducer}from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
REGISTER_SUCCESS,
 REGISTER_FAIL,
 USER_LOADED,
   AUTH_ERROR,
 LOGIN_SUCCESS,
LOGIN_FAIL,
 LOGOUT,
 CLEAR_ERRORS,
 SET_ALERT,
 REMOVE_ALERT

}from '../types';

const AuthState=props=>{
	const initialState={

		token:localStorage.getItem('token'),
		user:null,
		isAuthenticated:null,
		loading:true,
		error:null,
		alert:null
	};

	const [state,dispatch]=useReducer(authReducer,initialState);

//LOAD USER 
const loaduser =async()=>{
	//load token into global headers
	if(localStorage.token){
		setAuthToken(localStorage.token);
	}
try {
	const res =await axios.get('/api/auth');
	dispatch({
		type:USER_LOADED,
		payload:res.data
	});
	console.log('1');
} catch (error) {
	dispatch({type:AUTH_ERROR})
}
};
//REgister users
const register=async data=>{
	const config={
		headers:{
			'Content-Type':'application/json'
		}
	}
	try {
		const res=await axios.post('/api/users',data,config);
		dispatch({
			type:REGISTER_SUCCESS,
			payload:res.data
		});
	loaduser();

	} catch (err) {
		
		dispatch({
			type:REGISTER_FAIL,
			payload:err.response.data.msg
			
		});
	}
}
//login users
const login =async(data)=>{
const config={
	headers:{
		'Content-Type':'application/json'
	}
}
try {
	const res =await axios.post('/api/auth',data,config);
	dispatch({
		type:LOGIN_SUCCESS,
		payload:res.data
	});
	loaduser();
} catch (err) {
	dispatch({
		type:LOGIN_FAIL,
		payload:err.response.data.msg
		});
}

}
//logout users
const logout=()=>{
	dispatch({type:LOGOUT});
	localStorage.removeItem('token');
}
//clear errors
const clearerrors=()=>{
	dispatch({type:CLEAR_ERRORS});
}

	return(
		<AuthContext.Provider value={{
			token:state.token,
			isAuthenticated:state.isAuthenticated,
			loading:state.loading,
			user:state.user,
			error:state.error,
			alert:state.alert,
			register,
			clearerrors,
			loaduser,
			login,
			logout

		}}>
		{props.children}
		</AuthContext.Provider>

	);
};

export default AuthState;