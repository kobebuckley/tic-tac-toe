import { useState } from 'react'

// the board will need its state updated based on whose turn it is

// the value changes should be reflected as well

// aim to use an optimal algorithm / data structure

// so using a nested loop or the map function in JS

// the map goes over the row and column to find a every single cell and return a value. 

// if the value is a blank string, then it will display as _ indicating it can be chosen

const Board = () => {
    
    const board = [
      ['','X',''],
      ['','X',''],
      ['X','','O']
    ]

    return (    

    <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold underline">Tic Tac Toe Board</h1>
        {board.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, colIndex) => (
              <span key={colIndex}>{cell === '' ? '_' : cell}</span>
            ))}
          </div>
        ))}
      </div>

  );
};


export default Board
