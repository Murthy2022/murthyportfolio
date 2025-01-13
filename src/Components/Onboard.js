import React, { useContext, useState } from 'react'
import '../CSS/Onboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from './Contexts.js';
import { useNavigate } from 'react-router-dom'



export default function Onboard() {

// const [contact , setContact] = useState({
//   firstname : '',
//   middlename : ''
// });

const { data , setData } = useContext(DataContext);

const { auth } = useContext(DataContext);

const navigateOverview = useNavigate(DataContext)

console.log("In Form Validation")
console.log(data)


const handleChange = (event) => {

  const name = event.target.name;
  let value = event.target.value;

  setData({
    ...data,
    [name] : value
  });
}

const handleformButton = (event) => {
  event.preventDefault();
  console.log("In handle Form button")
  console.log(data)
  
  const emptyFields = Object.keys(data).filter((key) => data[key] == "")

  if(emptyFields.length != 0){
  alert(emptyFields + "Fields are empty")
  }
  else{
    // alert("You can check your detals in OverView tab")
    navigateOverview('/overview')
  }

}

console.log("auth")
console.log(auth)

  return (
    auth ? 
    <div>
      <h1 className='form-heading'>Your Info, Our World – Let’s Make It Happen!</h1>
      <form className='form-sheet'>
      <div>
      <label className='form_label' htmlFor="FirstName">FirstName :</label>
      <input className='form_input' type="text" name="FirstName" id="FirstName" value={data.FirstName} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="MiddleName">MiddleName :</label>
        <input className='form_input' type="text" name="MiddleName" id="MiddleName" value={data.MiddleName} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="LastName">LastName :</label>
        <input className='form_input' type="text" name="LastName" id="LastName" value={data.LastName} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="Location">Location :</label>
        <input className='form_input' type="text" name="Location" id="Location" value={data.Location} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="Role">Role :</label>
        <input className='form_input' type="text" name="Role" id="Role" value={data.Role} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="Experience">Experience :</label>
        <input className='form_input' type="number" name="Experience" id="Experience" value={data.Experience} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="RelevantExperience">RelevantExperience :</label>
        <input className='form_input' type="number" name="RelevantExperience" id="RelevantExperience" value={data.RelevantExperience} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="FatherName">FatherName :</label>
        <input className='form_input' type="text" name="FatherName" id="FatherName" value={data.FatherName} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="MotherName">MotherName :</label>
        <input className='form_input' type="text" name="MotherName" id="MotherName" value={data.MotherName} onChange={handleChange}/>
      </div>
      <div>
        <label className='form_label' htmlFor="MobileNumber">MobileNumber :</label>
        <input className='form_input' type="number" name="MobileNumber" id="MobileNumber" value={data.MobileNumber} onChange={handleChange}/>
      </div>

      <button className="validate-btn" onClick={handleformButton}>Validate</button>
      </form>
    </div>  :
    <div>
      <p>Plese login to view this page</p>
      <a href="http://localhost:3000/">Click here</a>
    </div>
    
  )
}
