import React from 'react'
import { LOGO } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      
    });
    
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-44'
      src={LOGO}
      alt='logo'
      />
      {user && <div className='flex p-2'>
        <img
        className='w-12 h-12'
        alt="userIcon"
        src="https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
        />
        <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;