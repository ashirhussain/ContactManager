import React,{useState,useContext,useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
	const alertcontext=useContext(AlertContext);
	const authcontext=useContext(AuthContext);
	const {setAlert}=alertcontext;
	const {register,error,clearerrors,isAuthenticated}=authcontext;
useEffect(()=>{
	if(isAuthenticated){
		props.history.push('/');
	}
	if(error==='user already exists'){
		setAlert(error,'danger');
		clearerrors();
	}
},[error,isAuthenticated,props.history]);

	const [user,setuser]=useState({
		name:'',
		email:'',
		password:'',
		password2:''
	});

	const {name,email,password,password2}=user;
	const  onchange=e=>{
		setuser({
			...user,
		[e.target.name]:e.target.value
		});
	}
	const onsubmit=e=>{
		e.preventDefault();
		if(name===''){
			setAlert("please fill name field","danger");
		}
		
	else if(email===''){
			setAlert("please fill email field","danger");
		}
		else if(password===''){
			setAlert("please fill password fields","danger");
		}
		else if(password2===''){
			setAlert("please fill confirm password field","danger");
		}
		else if(password!==password2){
			setAlert("password doesnt match","danger");
		}
		else{
register({	 name,email,password});
		}
	}
	return (
		<div className='form-container'>
			<h1>
			<span className='text-dark'>
			Account Register</span>
			</h1>
			<form onSubmit={onsubmit}>
			<div>
			<label >Name</label>
			<input type='text' name='name' value={name} onChange={onchange} />
			</div>

			<div>
			<label >Email</label>
			<input type='email' name='email' value={email} onChange={onchange} />
			</div>

			<div>
			<label>Password</label>
			<input type='password' name='password' value={password} onChange={onchange}  minLength='6'/>
			</div>

			<div>
			<label>Confirm password</label>
			<input type='password' name='password2' value={password2} onChange={onchange}  minLength='6'/>
			</div>
			<input type='submit' value='register'className='btn btn-dark'/>
			</form>
		</div>
	)
}
export default Register;