import { GoogleLogin , googleLogout} from '@react-oauth/google'
import React, { useContext } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { DataContext } from './Contexts'



export default function Home() {

const navigate = useNavigate()

const { auth , setAuth } = useContext(DataContext)
const {btnText , setBtnTxt} = useContext(DataContext)


  return (
    <div className='login-page'>
      <h1>Welcome to Our World!</h1>
      <h2>Your Journey Begins Here</h2>
      <p>Welcome! We're so glad you found your way to our site. Whether you're here to explore, learn, or get inspired, we've crafted this space with you in mind. Take your time to discover all the amazing features and resources we have to offer. Your adventure starts now, and we’re here to make it unforgettable. Let’s dive in!</p>
      <GoogleLogin 
        onSuccess={(credentialResponse) => {
          setAuth(true)
          setBtnTxt("Logout")
          console.log(credentialResponse)
          console.log(jwtDecode(credentialResponse.credential))
          navigate('/onboard')
          console.log(auth)
        }}
        onError={() => console.log("Login Failed")}
        shape='rectangular'
        logo_alignment='center'
        theme='filled_black'
        // useOneTap
         />
    </div>
  )
}
