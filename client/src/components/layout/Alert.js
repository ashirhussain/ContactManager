import React,{useContext} from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const alertcontext=useContext(AlertContext);
	return (
		alertcontext.alerts.length>0&&alertcontext.alerts.map(alert=>(
			<div key={alert.id} className={`alert alert-${alert.type}`}>
			{alert.msg}
			</div>
		))

	)
}
export default Alert;