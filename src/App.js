import { useState } from 'react';
import './App.css';
import Boxmodal from './components/Boxmodal'
import Navbar from './components/Navbar'
import UserContext from './components/UserContext';
function App() {
  const [winCountO, setwinCountO] = useState(0)
  const [winCountX, setwinCountX] = useState(0)

  const data = {
    winCountX,
    winCountO,
    setwinCountO,
    setwinCountX,
  }

  return (
    <UserContext.Provider value={data}>
        <Navbar/>
        <div className='gameScene'>
            <Boxmodal/>
        </div>
    </UserContext.Provider>
  );
}

export default App;
