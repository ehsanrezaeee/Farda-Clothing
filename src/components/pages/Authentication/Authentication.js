import SignUpForm from '../../sign-up/sign-up-form';
import SignInForm from '../../sign-in/sign-in-form';
import './Authentication.styles.scss'


const Authentication = () => {
  
  return <div className='authentication-container'>
    <SignInForm />
    <SignUpForm />
  </div>
}

export default Authentication;