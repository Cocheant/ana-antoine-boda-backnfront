import React from 'react'
import InviteForm from './InviteForm'
import { FaTimes } from 'react-icons/fa'
import './Modal.css'

const Modal = ({closeCB,className, panelClassName}) => {
  return (
    <div className={`modal-overlay ${className}`}>
        <div className={`modal-content ${panelClassName}`}>
            <header className="modal-header">
                <FaTimes size={25} color='rgb(253, 186, 116)' onClick={closeCB} className='cursor-pointer'/>
            </header>
            <div className="modal-body">
                <InviteForm/>
            </div>
        </div>
    </div>  )
}

export default Modal
