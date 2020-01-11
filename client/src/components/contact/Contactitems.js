import React,{useContext} from 'react';
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const Contactitems = ({contact}) => {
const contactContext=useContext(ContactContext);	
	const {_id,name,email,phone,type}=contact;
	const {deletecontact,editcontact,clearcurrent}=contactContext;
	const deleteContact= () =>{
		deletecontact(_id);
    clearcurrent();
	};


	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
			{name}
			<span
			className='badge badge-dark'
				style={{float:"right"}}>
			{type}
				</span>
			
			</h3>
			<ul className='list'>
{email && (<li> <i className='fas fa-envelope-open' >{' '}{email}</i></li>)}
{phone && (<li> <i className='fas fa-phone' >{' '}{phone}</i></li>)}
			</ul>
			<button className='btn btn-dark btn-sm' onClick={()=>editcontact(contact)}>edit</button>
			<button className='btn btn-danger btn-sm' onClick={deleteContact}>delete</button>

		</div>
	);
};
export default  Contactitems;

Contactitems.propTypes={contact:PropTypes.object.isRequired}