import React,{useState,useContext,useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'
 const Contactform = () => {
	 const contactContext=useContext(ContactContext);
	 const [contact,setcontact]=useState({
		 name:'',
		 email:'',
		 phone:'',
		 type:'personal'
	 });
	 
	 const{name,email,phone,type}=contact;
	 const  {addcontact,current,clearcurrent,updatecontact}=contactContext;

useEffect(()=>{
if(current!==null){
	setcontact(current)
}
else{
	setcontact({	 name:'',
		 email:'',
		 phone:'',
		 type:'personal'});
}
	 },[contactContext,current]);

	 const onchange=(e)=>{ setcontact({...contact,[e.target.name]:e.target.value})};
	 const onsubmit=(e)=>{ 
	 e.preventDefault();
	 if(current===null){
addcontact(contact);

	 }
	 else{
updatecontact(contact)

	 }
	 clearCurrent();
		  };

		 const clearCurrent=()=>{
clearcurrent();
		 };
	return (
		<form onSubmit={onsubmit}>
 <h2>{current?'Edit Contact':'Add Contact' }</h2>
			<input type='text' value={name} name='name' placeholder="Name"  onChange={onchange}/>
			<input type='email' value={email} name='email' placeholder="Email"  onChange={onchange}/>
			<input type='text' value={phone} name='phone' placeholder="Phone"  onChange={onchange}/>
			<h4>Contact type</h4>
			<input type='radio'  name='type' value='personal' onChange={onchange} checked={type==='personal'}/>personel {'  '}
			<input type='radio' name='type' value='professional' onChange={onchange}  checked={type==='professional'}/>professional
<div>
<input type='submit' value={current?'Upadte':' Add Contact'} className='btn btn-success'/>
</div>
{current&&
<div><button onClick={clearCurrent}>Clear</button></div>

}
		</form>
	)
}
export default Contactform;