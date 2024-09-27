import React, { useState } from 'react';
import ResponseFeedback from './ResponseFeedback';

const InviteForm = ({closeCB}) => {
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');

  const [guestValid, setGuestValid] = useState(false);

  const [guestValidationState, setGuestValidationState] = useState('waiting');


  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuestValidationState('pending');

 
    fetch(`${apiUrl}/api/guests/check`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ guestName, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log('Invitation added:', data);
        if(data && data.status === "success"){
          setGuestValid(true);
          setGuestValidationState('success');
          setTimeout(() => {         
            setGuestValidationState('waiting');
          }, 2000);

        }
        else if((data && data.status === "failure") || (data && !isNaN(data.status) && parseInt(data.status.toString()[0]) === '5')){
          setGuestValidationState('failure');
          setTimeout(() => {         
            setGuestValidationState('waiting');
          }, 2000);
        }
  

      })
      .catch((error) => {
        console.error('This guest is not recognized:', error);  
        setGuestValidationState('failure');
        setTimeout(() => {         
          setGuestValidationState('waiting');
        }, 2000);
      
      });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 text-vlorange items-center min-w-96'>
      <div className='flex flex-col items-start gap-2 font-bold'>
        <label>Name </label>
        <input
          type="text"
          value={guestName}
          className='rounded-md text-vlorange px-2 font-bold'
          onChange={(e) => setGuestName(e.target.value)}
          disabled = {guestValid? "disabled" : ""}
        />
      </div>
      <div className='flex flex-col items-start gap-2 font-bold'>
        <label>Email </label>
        <input
          type="email"
          value={email}
          className='rounded-md text-vlorange px-2 font-bold'
          onChange={(e) => setEmail(e.target.value)}
          disabled = {guestValid? "disabled" : ""}

        />
      </div>
      <div className='min-h-16   mt-5'>
      { 
      guestValidationState === "waiting"?          
          <button type="submit" className={'text-[var(--dark-bg)] font-bold bg-vlorange opacity-100  w-40 min-h-10 rounded-xl transition-all duration-500 ease-in-out  '}>
          Next            
          </button>:
              <ResponseFeedback status={guestValidationState}/>
      }
      </div>
    
          

    </form>
   
  );
};

export default InviteForm;
