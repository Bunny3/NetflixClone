import validator from 'validator';
export const checkValidData = (email, password) => {

  if(!validator.isEmail(email)) return "Email Id is not valid";
  if(!validator.isStrongPassword(password)) return "Password not Strong \n minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1";

  return null;
}