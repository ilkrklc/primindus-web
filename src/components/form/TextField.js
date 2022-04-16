import React , {useEffect} from 'react';
import { ErrorMessage, useField } from 'formik';
import './TextField.css'

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  useEffect(() => {
    // console.log(props)
  }, [])

  return (
    <div style={{display:'flex' , flexDirection:'column'}}>
      <label className='label-textfield' htmlFor={field.name}>{label}</label>
      <input
        className={`normal ${meta.touched && meta.error && 'error'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error-message" />
    </div>
  )
}