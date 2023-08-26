import React, { useEffect, useState ,useContext } from 'react'
import '../App.css'
import UserContext from './UserContext'
const Boxmodal = () => {
  const {setwinCountX , setwinCountO , winCountX , winCountO} = useContext(UserContext)
  const [clickCount , setClickCount] = useState(0);
  const boxid = [1,2,3,4,5,6,7,8,9];

  const clickFonk = (e) =>{
    setClickCount(clickCount + 1)
    if (clickCount % 2 === 0){
        e.target.classList.add('x');
        e.target.style.pointerEvents = "none"
    }
    else{
      e.target.classList.add('o');
      e.target.style.pointerEvents = "none"
    }
  }
  const result = (winner) =>{
    document.querySelector(".modal").classList.remove("d-none");
    document.querySelector(".box9").style.opacity = .2
    if (winner === "X") {
      setwinCountX(winCountX+1)
      document.querySelector(".modal h2").innerText = `${winner} Kazandi`
    }
    else if(winner === "O"){
      document.querySelector(".modal h2").innerText = `${winner} Kazandi`
      setwinCountO(winCountO + 1)
    }
    else{
      document.querySelector(".modal h2").innerText = "Maç Berabere"
    }
  }
  const control = () => {
    const boxes = document.querySelectorAll(".box");
    let drawControl = true;
      for (let i = 0; i < 9; i+=3) {
        if (boxes[i].classList.toString() === boxes[i+1].classList.toString() && boxes[i+2].classList.toString() === boxes[i+1].classList.toString()) {
          if(boxes[i,i+1,i+2].classList.contains("x")){drawControl = false;result("X"); }
          if(boxes[i,i+1,i+2].classList.contains("o")){drawControl = false;result("O"); }
        }
      }
      for (let i = 0; i < 3; i+=1) {
        if (boxes[i].classList.toString() === boxes[i+3].classList.toString() && boxes[i+6].classList.toString() === boxes[i+3].classList.toString()) {
          if(boxes[i,i+3,i+6].classList.contains("x")){drawControl = false;result("X");}
          if(boxes[i,i+3,i+6].classList.contains("o")){drawControl = false;result("O"); }
        }
      }
      if (boxes[0].classList.toString() === boxes[4].classList.toString() && boxes[8].classList.toString() === boxes[4].classList.toString()) {
        if(boxes[0,4,8].classList.contains("x")){drawControl = false;result("X");}
        if(boxes[0,4,8].classList.contains("o")){drawControl = false;result("O"); }
      }
 
      if (boxes[2].classList.toString() === boxes[4].classList.toString() && boxes[6].classList.toString() === boxes[4].classList.toString()) {
        if(boxes[2,4,6].classList.contains("x")){drawControl = false;result("X"); }
        if(boxes[2,4,6].classList.contains("o")){drawControl = false;result("O"); }
      }
      if (clickCount % 9 == 0 && clickCount!= 0 && drawControl){
          result("draw")
      }
  }
  
  useEffect(() => {
    control()
  }, [clickCount])
  
  const replayFonk = () =>{
    document.querySelector(".modal").classList.add("d-none");
    document.querySelector(".box9").style.opacity = 1;
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < 9; i++) {
      boxes[i].classList.remove("x");
      boxes[i].classList.remove("o");
      boxes[i].style.pointerEvents = "all"
      setClickCount(0);
     
    }
  }

  return (
    <div>
    <div className='box9'>
        {boxid.map((index)=>(
            <div className="box" key={index} onClick={(e) => (
              clickFonk(e)
            )}></div>
        ))}   
    </div>
    <div className="modal d-none">
    <div className="modalBody">
      <h2></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat totam expedita unde ratione pariatur aperiam odit, blanditiis dolorem at vero in, fugit quos sint dignissimos maiores, natus quaerat similique.</p>
    </div>
    <button className='restart'onClick={()=>(replayFonk())}>Tekrar Oyna</button>
    <button className='restart' onClick={()=>(window.location.reload())}>Sıfırla</button>
   
  </div>
    </div>
  )
}

export default Boxmodal