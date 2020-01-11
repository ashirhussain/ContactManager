import React,{useContext,useRef,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext'


const Contactfilter = () => {
const contactContext=useContext(ContactContext);

	useEffect(()=>{
if(contactContext.filtered===null){
	text.current.value='';
}
	});
const text =useRef('');
	const onchange = (e)=>{
if(text.current.value!=='')
{
contactContext.filtercontacts(e.target.value);
}
else{
contactContext.clearfilter();
}
	};
	return (
		<form>
			<input ref ={text} type='text' placeholder='filter contacts....' onChange={onchange}/>
		</form>
	)
}
export default Contactfilter;