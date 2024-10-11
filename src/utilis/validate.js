export const checkValidData=(email,password,issigninForm)=>{
  const isEmailvalid=  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordvalid= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if(!isEmailvalid) return "Email is not valid";
  if(!isPasswordvalid) return "password is not valid";
}