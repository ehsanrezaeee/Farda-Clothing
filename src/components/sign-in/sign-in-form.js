import { useState } from "react";
import { signinwithgooglepopup, signinAuthUserwithEmailandPass } from '../../utility/firebase/firebase'
import FormInput from "../../form-input/form-input";
import './sign-in-form.styles.scss';

const SignInForm = () => {

  const [formvalues, setFormValues] = useState({
    email: '',
    password: ''
  })


  const signInWithGoogle = async () => {
    await signinwithgooglepopup();
    

  }

  const submitformHandler = async (event) => {
    event.preventDefault();
    
    try {
      const {user} = await signinAuthUserwithEmailandPass(formvalues.email,formvalues.password)
      setFormValues({
        email: '',
        password: ''
      })
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('پسورد اشتباه است')
          break
        case 'auth/user-not-found':
          alert("یوزر ثبت نام نشده")
          break;
        default:
          console.log(error)
      }
    }
  };

  const changeHandler = (event) => {
    const {name, value} = event.target
    setFormValues({...formvalues, [name]: value })
  }


  return(
    <div className="sign-up-container">
    <h2>اگر عضو هستید!</h2>
      <span>وارد شوید</span>
      <form onSubmit={submitformHandler}>

        <FormInput label='ایمیل' typee='email' onChangee={changeHandler} namee='email' valuee={formvalues.email} />

        <FormInput label='پسورد' typee='password' onChangee={changeHandler} namee='password' valuee={formvalues.password} />
        
        <div className="buttons-container">
          <button type='submit' className="btn btn-outline-primary">ورود</button>
          <button type='button' onClick={signInWithGoogle} className="btn btn-primary">ورود با گوگل</button>
        </div>
        
      </form>
    </div>
  )
};



export default SignInForm;