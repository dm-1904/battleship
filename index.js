import readlineSync from "readline-sync"
import { board4x4, board5x5, board6x6 } from "./boards.js"
const youWin = `
========
__   _______ _   _   _    _ _____ _   _
\\ \\ / /  _  | | | | | |  | |_   _| \\ | |
 \\ V /| | | | | | | | |  | | | | |  \\| |
  \\ / | | | | | | | | |/\\| | | | | . ' |
  | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
  \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/
========`;


const point1 = new Set()
const point2 = new Set()
const startingCoordinates = []
const smallShipBoard = []
const bigShipBoard = []
let board
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let boardObj = {}
let firstPointQuantity
let firstPointMax
let secondPointQuantity
let secondPointMax
let smallBoatStartMax
let smallBoatStartMin
let bigBoatMin
let hitsToWin
let hits
const gameOver = 'GAME OVER'



const firstPointCoordinate = (quantity, max) => {
  while (point1.size !== quantity) {
    point1.add(Math.floor(Math.random() * max))
  }
  return point1
}

const secondPointCoordinate = (quantity, max) => {
  while (point2.size !== quantity) {
    point2.add(Math.floor(Math.random() * max))
  }
  return point2
}
const convertSetsToArrays = (set1, set2) => {
  set1 = Array.from(set1)
  set2 = Array.from(set2)
  for (let i = 0; i < set1.length && set2.length; i++) {
    startingCoordinates.push([set1[i], set2[i]])
  }
  return startingCoordinates
};

const smallBoatPositions = (arr, max, min) => {
  for (let i = 0; i < arr.length - min; i++) {
    smallShipBoard.push(arr[i])
    if (arr[i][0] === max) {
      smallShipBoard.push([arr[i][0] - 1, arr[i][1]])
    } else {
      smallShipBoard.push([arr[i][0] + 1, arr[i][1]])
    }
  }
  return
}

const bigBoatPositions = (arr, min) => {
  for (let i = min; i < arr.length; i++) {
    bigShipBoard.push(arr[i])
    if (arr[i][0] >= 2) {
      bigShipBoard.push([arr[i][0] - 1, arr[i][1]])
      bigShipBoard.push([arr[i][0] - 2, arr[i][1]])
    } else {
      bigShipBoard.push([arr[i][0] + 1, arr[i][1]])
      bigShipBoard.push([arr[i][0] + 2, arr[i][1]])
    }
  }
  return
}

const battleShipPlacer = (smallArr, bigArr) => {
  for (let i = 0; i < smallArr.length; i++) {
    let smallBoatCoordinate1 = smallArr[i][0]
    let smallBoatCoordinate2 = smallArr[i][1]
    let smallBoatObj = board[smallBoatCoordinate1][smallBoatCoordinate2]
    smallBoatObj.type = 'small'
    smallBoatObj.id = 2
  }
  for (let i = 0; i < bigArr.length; i++) {
    let bigBoatCoordinate1 = bigArr[i][0]
    let bigBoatCoordinate2 = bigArr[i][1]
    let bigBoatObj = board[bigBoatCoordinate1][bigBoatCoordinate2]
    bigBoatObj.type = 'large'
    bigBoatObj.id = 1
  }
  return
}

const printBoard = (board, debug) => {
  const boardRows = 'ABCDEF'
  if (debug === false) {
    for (let i = 0; i < board.length; i++) {
      const row = board[i]
      boardObj[boardRows[i]] = []
      for (let j = 0; j < row.length; j++) {
        const boatPosition = row[j]
        if (boatPosition.hit === true && boatPosition.id === 2) {
          boardObj[boardRows[i]].push('🟠')
        }
        if (boatPosition.hit === true && boatPosition.id === 1) {
          boardObj[boardRows[i]].push('🔵')
        }
        if (boatPosition.hit === true && boatPosition.type === 'empty') {
          boardObj[boardRows[i]].push('❗️')
        }
        if (boatPosition.hit === false) {
          boardObj[boardRows[i]].push('-')
        }
      }
    }
  }
  if (debug === true) {
    for (let i = 0; i < board.length; i++) {
      const row = board[i]
      boardObj[boardRows[i]] = []
      for (let j = 0; j < row.length; j++) {
        const boatPosition = row[j]
        if (boatPosition.id === 2) {
          boardObj[boardRows[i]].push('🟠')
        }
        if (boatPosition.id === 1) {
          boardObj[boardRows[i]].push('🔵')
        }
        if (boatPosition.type === 'empty') {
          boardObj[boardRows[i]].push('-')
        }
      }
    }
  }
  console.table(boardObj)
  return boardObj
}

const greetUser = () => {
  console.log("Welcome to Battleship!")
  const wantToPlay = readlineSync.keyInYN('Do you want to play?')
  // if (wantToPlay === true) return selectBoardSize()
  if (wantToPlay === false) {
    console.log(gameOver)
    process.exit()
  }
  return wantToPlay
}

const selectBoardSize = () => {
  console.log('What size board would you like to play on?')
  const answers = ['4X4 with 1 large boat & 1 small boat', '5X5 with 1 large boat & 2 small boats', '6X6 with 2 large boats & 2 small boats']
  const userAnswer = readlineSync.keyInSelect(answers, 'Choose your board size: ');
  // console.log(userAnswer)
  if (userAnswer === 2) {
    board = board6x6
    firstPointQuantity = 4
    firstPointMax = 5
    secondPointQuantity = 4
    secondPointMax = 5
    smallBoatStartMax = 5
    smallBoatStartMin = 2
    bigBoatMin = 2
    hitsToWin = 10
    boardObj = {}
    // firstPointCoordinate(4, 5)
    // secondPointCoordinate(4, 5)
    // convertSetsToArrays(point1, point2)
    // smallBoatPositions(startingCoordinates, 5, 2)
    // bigBoatPositions(startingCoordinates, 2)
    // takeYourShot(board, 10)
  }
  if (userAnswer === 1) {
    board = board5x5
    firstPointQuantity = 3
    firstPointMax = 4
    secondPointQuantity = 3
    secondPointMax = 4
    smallBoatStartMax = 4
    smallBoatStartMin = 1
    bigBoatMin = 2
    hitsToWin = 7
    boardObj = {}
    // firstPointCoordinate(3, 4)
    // secondPointCoordinate(3, 4)
    // convertSetsToArrays(point1, point2)
    // smallBoatPositions(startingCoordinates, 4, 1)
    // bigBoatPositions(startingCoordinates, 2)
    // takeYourShot(board, 7)
  }
  if (userAnswer === 0) {
    board = board4x4
    firstPointQuantity = 2
    firstPointMax = 3
    secondPointQuantity = 2
    secondPointMax = 3
    smallBoatStartMax = 3
    smallBoatStartMin = 1
    bigBoatMin = 1
    hitsToWin = 5
    boardObj = {}
    // firstPointCoordinate(2, 3)
    // secondPointCoordinate(2, 3)
    // convertSetsToArrays(point1, point2)
    // smallBoatPositions(startingCoordinates, 3, 1)
    // bigBoatPositions(startingCoordinates, 1)
    // takeYourShot(board, 5)

  }
  if (userAnswer === -1) {
    console.log('GAME OVER')
    playAgain()
  }
}

const takeYourShot = (board) => {
  hits = 0

  const shot = readlineSync.question('Enter a location to strike: ').toUpperCase()
  let letter = shot[0]
  let number = shot[1]
  let letterToIndex = alphabet.indexOf(letter)
  console.log('board ', board)
  console.log('lettertoindex', letterToIndex)
  // console.log('1st board[letterToIndex][number]', board[letterToIndex][number])
  console.log('boardObj ', boardObj)
  let boardObjKeys = Object.keys(boardObj)
  let boardObjValues = Object.values(boardObj)
  if (!boardObjKeys.includes(letter)) {
    console.log('Invalid strike location. Try again.')
    takeYourShot(board)
  }
  console.log("boardObj[letter]", boardObj[letter])
  if (number >= boardObj[letter].length) {
    console.log('Invalid strike location. Try again.')
    takeYourShot(board)
  }
  board[letterToIndex][number].hit = true
  console.log('2nd board[letterToIndex][number]', board[letterToIndex][number])
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].hit === true && board[i][j].id !== undefined) {
        hits++
      }
    }
  }
  return hits
}

// const takeYourShot = (board, count) => {
//   hits = 0
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j].id !== undefined && board[i][j].hit === true) {
//         hits++
//       }
//     }
//   }
//   if (count === hits) {
//     console.log(youWin)
//     return
//   }
//   const shot = readlineSync.question('Enter a location to strike: ').toUpperCase()
//   let letter = shot[0]
//   let number = shot[1]
//   let letterToIndex = alphabet.indexOf(letter)
//   if (board[letterToIndex][number] === undefined) {
//     console.log('Invalid strike location. Try again.')
//     takeYourShot(board, count)
//   }
//   board[letterToIndex][number].hit = true
//   printBoard(board, false)
//   takeYourShot(board, count)
// }

const playAgain = () => {

  const again = readlineSync.keyInYN('Would you like to play again?')
  // console.log('again ', again)
  if (again) {
    return gamePlayLoop()
  }
  console.log(gameOver)
  process.exit()
}

const setupBoard = () => {
  firstPointCoordinate(firstPointQuantity, firstPointMax)
  secondPointCoordinate(secondPointQuantity, secondPointMax)
  convertSetsToArrays(point1, point2)
  smallBoatPositions(startingCoordinates, smallBoatStartMax, smallBoatStartMin)
  bigBoatPositions(startingCoordinates, bigBoatMin)
  battleShipPlacer(smallShipBoard, bigShipBoard)
  printBoard(board, false)
  takeYourShot(board)
}

const gamePlayLoop = () => {
  greetUser()
  selectBoardSize()
  setupBoard()

  while (hits < hitsToWin) {
    console.log('hits ', hits)
    printBoard(board, false)
    takeYourShot(board)
  }
  printBoard(board, false)
  console.log(youWin)
  playAgain()
}

gamePlayLoop()
