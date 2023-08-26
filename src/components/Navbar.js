import React, { useContext } from 'react'
import UserContext from './UserContext'
const Navbar = () => {
const {winCountX , winCountO} = useContext(UserContext)    
  return (
    <div className="nav">
        <div className="logo">X<span className='letterO'>O</span>X</div>
        <div>
            <span className="score">Player X : {winCountX}</span>
            <span className="score">Player O :  {winCountO}</span>
        </div>
    </div>
  )
}

export default Navbar