import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {buyCake_Action} from "../redux/action"

 function Cake() {
    const state = useSelector(state => state)
    const navigate = useNavigate()
    useEffect(() => {
     if(state.isLoggedIn === false) {
          navigate("/login", {replace: true})
               }
    }, [])
    const dispatch = useDispatch()
    
    const handleClick = () => {
          if(input){
  dispatch(buyCake_Action(parseInt(input)))
  alert("cake purchase was successful")
          }
          else{
            alert("input field can not be empty")
          }
    }
    const [input, setInput] = useState("")
    return(
        <div>
            <p>Number of Biscuit is {state.numberOfBiscuit}</p>
            <p>Number of Cakes is {state.numberOfCakes}</p>
            <input type="number" value={input} 
            onChange= {
                (e) => { setInput(e.target.value)}
            } />
            <button onClick={
             handleClick
            }>Buy Cake</button>
        </div>
    )
}
export default Cake
