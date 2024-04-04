import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = ({listing}) => {
    console.log(listing)

    const [landLord,setLandlord] =useState(null);
    const [message,setMessage] =useState(null)

    
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
     
        setLandlord(data);
        console.log(landLord)
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listing.userRef]);
    
  const handleChange =(e)=>{
    setMessage(e.target.value)
  }
  return (
    <>
      {landLord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landLord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea className='w-full p-3  border rounded-lg ' placeholder='Enter your message here' name='message' id='message' rows={2} value={message} onChange={handleChange}>

          </textarea>
          <Link to={`mailto:${landLord.message}?subject=Regarding ${listing.name}&body=${message}`} className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-90'>
          Send Email
          </Link>
        </div>
      )}
    </>
  )
}

export default Contact;