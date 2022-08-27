import { useState } from "react";
import { CreateAuthUserwithEmailandPass, createUserDocumentFromAuth } from '../../utility/firebase/firebase'
import FormInput from "../../form-input/form-input";
import './sign-up-form.styles.scss';

const SignUpForm = () => {

  const [formvalues, setFormValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const { displayName, email, password, confirmpassword } = formvalues


  const submitformHandler = async (event) => {
    event.preventDefault();

    if (formvalues.password !== formvalues.confirmpassword) {
      alert('تایید پسورد و پسورد باید یکسان باشد')
      return;
    }
    
    try {
      const { user } = await CreateAuthUserwithEmailandPass(formvalues.email, formvalues.password);
      
      await createUserDocumentFromAuth(user, { displayName } )
      setFormValues({
        displayName: '',
        email: '',
        password: '',
        confirmpassword: ''
      })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('قبلا با این ایمیل ثبت نام کرده اید')
      } else {
        console.log('problemsssss', error)
      }
     
    }
  };

  const changeHandler = (event) => {
    const {name, value} = event.target
    setFormValues({...formvalues, [name]: value })
  }


  return(
    <div className="sign-up-container">
    <h2>اگر عضو نیستید!</h2>
      <span>ثبت نام کنید</span>
      <form onSubmit={submitformHandler}>
        <FormInput label='نام' typee='text' onChangee={changeHandler} namee='displayName' valuee={formvalues.displayName} />

        <FormInput label='ایمیل' typee='email' onChangee={changeHandler} namee='email' valuee={formvalues.email} />

        <FormInput label='پسورد' typee='password' onChangee={changeHandler} namee='password' valuee={formvalues.password} />

        <FormInput label='تایید پسورد' typee='password' onChangee={changeHandler} namee='confirmpassword' valuee={formvalues.confirmpassword} />

        <button type='submit' className="btn btn-outline-primary">ثبت نام</button>
      </form>
    </div>
  )
};



export default SignUpForm;