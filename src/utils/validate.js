export const checkValidData = (email, password) => {

  const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  // const isPasswordValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(password);


  if(!isEmailValid) return "Email Id is not valid";
  // if(!isPasswordValid) return "Password is not valid";
  return null;
}