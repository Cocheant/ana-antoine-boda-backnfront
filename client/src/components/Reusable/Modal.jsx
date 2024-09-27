import React from 'react'
import InviteForm from './InviteForm'
import { FaTimes } from 'react-icons/fa'
import './Modal.css'

const Modal = ({closeCB}) => {
  return (
    <div className="modal-overlay">
        <div className="modal-content">
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
