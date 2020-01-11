import React,{Fragment} from 'react'
import spinner from './Spinner.gif'
import './spinner.css'
const Spinner = () => {
    return (
        <Fragment>
            <img src ={spinner} alt="loading"  className="spinner"/>
        </Fragment>
    )
}
export default Spinner;