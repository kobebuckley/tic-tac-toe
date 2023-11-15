// import { useState } from "react";
import { useState } from 'react'
import './App.css'


function App() {

  const [boardData, setBoardData] = useState([null,null,null,null,null,null,null,null,null])

  const updateBoard = (index) => {
    const newBoardData = [...boardData];
    if(newBoardData[index] === null) {
      newBoardData[index] = 'test here';
      setBoardData(newBoardData)
    }
  }

  function Tile({index, tile}) {
    return (
      <div className="Tile" onClick={() => updateBoard(index)}>
        {tile}
      </div>
    )
  }

  function Board() {
    return (
      <div className="Board">
        {
          boardData.map((tile, index) => {
            return <Tile key={index} index={index} tile={tile} />
          })
        }
      </div>
    )
  }

  
  return (
    <div className="App">
      <Board/>
    </div>
  )
}

export default App;
