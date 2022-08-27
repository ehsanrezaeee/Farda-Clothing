
import './form-input.styles.scss'

const FormInput = (props) => {
  return (
  <div className='group'>
      <input
      className='form-input' 
      required 
      type={props.typee}
      onChange={props.onChangee} 
      name={props.namee} 
      value={props.valuee}>
      </input>
      <label className={`${props.valuee.length ? 'shrink' : ''} form-input-label`}>{props.label}</label>
      
  </div>
)};



export default FormInput;