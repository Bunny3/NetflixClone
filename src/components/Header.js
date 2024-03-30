import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email, displayName} = user;
        dispatch(addUser({uid: uid, email:email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[]);

  const hangleGPTSearchClick = () => {
    //Toggle GPT Search 
    dispatch(toggleGptSearchView());
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      
    });
    
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between '>
      <img 
      className='w-44 mx-auto md:mx-0'
      src={LOGO}
      alt='logo'
      />
      {user && <div className='flex p-2 justify-between'>
        {showGptSearch && (
                  <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>)}
                </select>
        )}
        <button 
        className='py-2 px-4 m-2 mx-4 bg-purple-800 text-white rounded-lg'
        onClick={hangleGPTSearchClick}>
          {!showGptSearch ? "GPT Search" : "Homepage" }</button>
        <img className='hidden md:inline-block w-12 h-12' alt="userIcon"
          src="https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
        />
        <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;