export default function validateInfo(username) {
  let errors = {};

  if (!username.username.trim()) {
      errors.username ='Username required';
  }

  //password
  if (!username.password) {
      errors.password = 'Password is required';
    } else if (username.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }

    //password2
    if (!username.password2) {
        errors.password2 ='Password is required';
    } else if (username.password2 !== username.password) {
        errors.password2 = 'Password do not match';
    }
return errors;    
}







