import React, {useEffect} from 'react'
import { useState } from 'react'
import {useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {login_Action} from "../redux/action"

function Login() {
const navigate = useNavigate()
    const state = useSelector(state => state)
    
    const [submit, setSubmit] = useState("")
   useEffect(() => {
    console.log(state)
   }, [submit])
    const dispatch = useDispatch()
    const [email, setEmail] = useState("") 
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email){
            setSubmit(!submit)
            dispatch(login_Action())
            navigate("/", {replace: true})
          
            alert("user login successful")
        } else{
            alert("input field can not be empty")
        }
        
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
  <h2>Login</h2>
  <input
   type="email" name=""
    id="" value={email}
    placeholder="enter email"
    required
    onChange={
        (e) => setEmail(e.target.value)
    }
    />
    <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login