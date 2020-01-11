import React,{useState,useEffect,useContext} from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Login = (props) => {

	const authcontext=useContext(AuthContext);
	const alertcontext=useContext(AlertContext);

const {isAuthenticated,login,clearerrors,error}=authcontext;
const {setAlert}=alertcontext;

useEffect(()=>{
if(isAuthenticated){
props.history.push('/');
}
if(error==='invalid credentials'){
setAlert(error,'danger');
clearerrors();
}
},[isAuthenticated,error,props.history]);

	const [user,setuser]=useState({
		email:'',
		password:''
	});

	const {email,password}=user;
	const  onchange=e=>{
		setuser({
			...user,
		[e.target.name]:e.target.value
		});
	}
	const onsubmit=e=>{
		e.preventDefault();
		if(email==''){
			setAlert('please fill name field','danger');
		}
		else if(password==''){
			setAlert('please fill name field','danger');
		}
		else{
    login({email,password});

		}
	}
	return (
		<div className='form-container'>
			<h1>
			<span className='text-dark'>
			Login</span>
			</h1>
			<form onSubmit={onsubmit}>
			
			<div>
			<label >Email</label>
			<input type='email' name='email' value={email} onChange={onchange}/>
			</div>

			<div>
			<label>Password</label>
			<input type='password' name='password' value={password} onChange={onchange}/>
			</div>

			
			<input type='submit' value='login'className='btn btn-primary'/>
			</form>
		</div>
	)
}
export default Login;