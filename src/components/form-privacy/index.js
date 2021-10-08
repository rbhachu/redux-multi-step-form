import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { formStage, formPrivacy } from '../../store/rootSlice'
import './styles.scss';

function FormUserPrivacy({ pageTitle, submitButtonText, previousButton }) {

  // redux
  const dispatch = useDispatch();

  const currentStage = useSelector(state => state.FormStage) // for previous button
  const stateSignup1 = useSelector(state => state.FormUserPrivacy.signup1)
  const stateSignup2 = useSelector(state => state.FormUserPrivacy.signup2)

  //const stateAll = useSelector(state => state)
  //console.log(`output: ${JSON.stringify(stateAll, null, 2)}`) // output results to console.log


  // form values initial state - getting from redux
  const [formData, setFormData] = useState({
    //signup1: stateSignup1 === "yes" ? true : false,
    //signup2: stateSignup2 === "yes" ? true : false

    //signup1: stateSignup1 ? true : 'false1',
    //signup2: stateSignup2 ? true : 'false2'
    
    signup1: stateSignup1 ? true : false,
    signup2: stateSignup2 ? true : false
    
    //signup1: stateSignup1 || false,
    //signup2: stateSignup2 || false

    //signup1: stateSignup1, // add if empty then false!
    //signup2: stateSignup2
  })

  
  // form values onchange
  const [isChecked1, setIsChecked1] = useState(formData.signup1);
  const [isChecked2, setIsChecked2] = useState(formData.signup2);

  const handleChange1 = (e) => {  
    setIsChecked1(!isChecked1);
    isChecked1 ? setFormData({signup1: true }) : setFormData({signup1: false })
  }
  const handleChange2 = (e) => {
    setIsChecked2(!isChecked2);
    isChecked2 ? setFormData({signup2: true }) : setFormData({signup2: false })
  }

  // onsubmit
  //const handleSubmit = (e) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // stop form submission

    const { name, value } = e.target
    setFormData({
      ...formData, 
      [name]: value
    })

    // update Redux Slice
    dispatch(
      formStage(3) // update formStage
    )
    dispatch(
      formPrivacy({
        //signup1: formData.signup1,
        //signup2: formData.signup2

        signup1: formData.signup1 ? true : false,
        signup2: formData.signup2 ? true : false
      })
    );
    
  }


  return (

    <>
        <h2>{pageTitle || 'Privacy'}</h2>
          
        <form 
          name="form-privacy"
          id="form-privacy"
          //onSubmit={(e) => handleSubmit(e)}
          onSubmit={handleSubmit}
        >
      
        <p className="form-boxes">
          <input 
            type="checkbox" 
            id="signup1"
            name="signup1"
            //value={formData.signup1}
            checked={!!formData.signup1}
            //checked={isChecked1}
            //onClick={handleChange1}
            onChange={(e) => handleChange1(e)}
            //checked
          />
          <label htmlFor="signup1">Recieve updates about Tray.io product by email</label>
        </p>

        <p className="form-boxes">
          <input 
            type="checkbox" 
            id="signup2"
            name="signup2"
            //value={formData.signup2}
            checked={!!formData.signup2}
            //checked={isChecked2}
            //onClick={handleChange2}
            onChange={(e) => handleChange2(e)}
            //checked
          />
          <label htmlFor="signup2">Recieve communication by email for other products created by the Tray.io team</label>
        </p>

        <div className="btn-array">
          {(previousButton) && 
            <p>
              <input 
                  type="submit" 
                  value={`Back`}
                  onClick={() => dispatch(formStage(currentStage-1))}
                />
            </p>
          }
          <p>
            <input 
              type="submit" 
              value={ submitButtonText || 'Submit' } 
            />
          </p>
        </div>
    
      </form>
    
    </>

  );

}

export default FormUserPrivacy;
