import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    //Se revisan las combinaciones ganadaroas

    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    //Si no hay ganador
    return null
}

//Chequea que no haya espacios vacios en el tablero
export const checkEndGame = (newBoard) => { 
  return newBoard.every((square)=>square !== null)
}