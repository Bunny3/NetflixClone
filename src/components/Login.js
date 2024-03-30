import React, { useRef, useState } from 'react'
import Header from './Header'
import { netflix_background } from '../utils/constants'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handeButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    
    if(message) {
      return;
    }

    //sign In/Sign Up
    if(!isSignInForm) {
      //sign up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid,email, displayName} = auth.currentUser;
          dispatch(addUser({uid: uid, email:email, displayName: displayName }));
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" - "+errorMessage);
        // ..
      })
    }  else {
      //sign in Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage);
  });
    }

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img 
        className='h-screen w-screen object-cover'
        src={netflix_background}
        alt='logo'
        ></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"SignUp"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/> }
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <p>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handeButtonClick}>
          {isSignInForm ?"Sign In" : "Sign up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm?"New to Netflix? Sign up Now":"Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;