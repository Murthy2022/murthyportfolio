import React, { useState } from 'react'
import '../CSS/FormValidation.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function FormValidation() {

const [contact , setContact] = useState({
  firstname : '',
  middlename : ''
});

const handleChange = (event) => {

  const name = event.target.name;
  let value = event.target.value;

  setContact({
    ...contact,
    [name] : value
  });

}


  return (
    <div>
      <form>
      <div>
      <label className='form_label' htmlFor="firstname">FirstName :</label>
      <input className='form_input' type="text" name="firstname" id="firstname" value={contact.firstName} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="middlename">MiddleName :</label>
        <input className='form_input' type="text" name="middlename" id="middlename" value={contact.middlename} onChange={handleChange}/>
      </div>
      </form>
    </div>
  )
}
