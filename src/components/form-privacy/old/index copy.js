import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { formPrivacy } from '../../store/rootSlice'
import './styles.scss';

function FormUserPrivacy({ pageName, submitButtonText }) {

  // redux
  const dispatch = useDispatch();

  // form values initial state
  const [formData, setFormData] = useState({
    signup1: "no",
    signup2: "no",
    formstatus: false
  })


  // form values onchange
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
        ...formData, 
        [name]: value
    })
  }


  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop form submission

    // update Redux Slice
    dispatch(
      formPrivacy({
        signup1: formData.signup1,
        signup2: formData.signup2
      })
    );
    
  }


  return (

    <>
        <h3>{pageName || 'Privacy'}</h3>
          
        <form 
          name="form-privacy"
          id="form-privacy"
          onSubmit={(e) => handleSubmit(e)}
        >
      
        <p>
          <input 
            type="checkbox" 
            id="signup1"
            name="signup1"
            value="yes"
            aria-checked="false"
            onChange={handleChange}
          />
          <label htmlFor="signup1">Recieve updates about Tray.io product by email</label>
        </p>

        <p>
          <input 
            type="checkbox" 
            id="signup2"
            name="signup2"
            value="yes"
            aria-checked="false"
            onChange={handleChange}
          />
          <label htmlFor="signup2">Recieve communication by email for other products created by the Tray.io team</label>
        </p>

        <p className="btn">
          <input 
            type="submit" 
            value={ submitButtonText || 'Submit' } 
          />
        </p>
    
      </form>
    
    </>

  );

}

export default FormUserPrivacy;
