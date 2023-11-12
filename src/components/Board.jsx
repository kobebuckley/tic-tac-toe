import { useState } from 'react'

// the board will need its state updated based on whose turn it is

// the value changes should be reflected as well

// aim to use an optimal algorithm / data structure

// so using a nested loop or the map function in JS

// the map goes over the row and column to find a every single cell and return a value. 

// if the value is a blank string, then it will display as _ indicating it can be chosen

const Board = () => {
    
    const board = [
      ['X','X','O'],
      ['O','X',''],
      ['X','X','O']
    ]

    return (    

    <div className="flex items-center justify-center h-screen border-8 border-green-500">
      
      <div id='game-board' className='p-4 border-8 border-sky-500'>

        <h1 className="text-center text-6xl font-bold underline">Tic Tac Toe Board</h1>

        <div className='p-2 m-2 items-center justify-center border-8 border-red-800' >

        {board.map((row, rowIndex) => (
          <div className='p-16 m-2 items-center justify-center border-8 border-gray-800' key={rowIndex}>
            {row.map((cell, colIndex) => (
              <span className=' p-16 m-2 items-center justify-center border-8 border-purple-800' key={colIndex}>{cell === '' ? '__' : cell}</span>
            ))}
          </div>
        ))}
      </div>
        </div>

      </div>

  );
};


export default Board
