import { useState } from 'react'

function Board() {
  const [count, setCount] = useState(0)

  const board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

  return (
    <>
      <div>
     Here are the values inside of the board {board}
      </div>
     
    </>
  )
}

export default Board
