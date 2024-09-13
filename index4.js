const readlineSync = require('readline-sync')
const youWin = `
========
__   _______ _   _   _    _ _____ _   _
\\ \\ / /  _  | | | | | |  | |_   _| \\ | |
 \\ V /| | | | | | | | |  | | | | |  \\| |
  \\ / | | | | | | | | |/\\| | | | | . ' |
  | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
  \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/
========`;
const board6x6 = [
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
]
const board5x5 = [
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
]
const board4x4 = [
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
  [
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
    { type: "empty", hit: false },
  ],
]

const point1 = new Set()
const point2 = new Set()
const startingCoordinates = []
const smallShipBoard = []
const bigShipBoard = []
let board
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const boardObj = {}

/* I had issues with the Count variable on line 295.
   I tried to make it a global variable and make a starting value in the IF conditions
   of the selectBoardSize function but it threw and error. So the game ends on the larger boards before it should.
   Also, when the board is selected, the board with the ship's location is printed.
   I don't know why either is happening */


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
}

const smallBoatPositions = (arr, max, min) => {
  for (let i = 0; i < arr.length-min; i++) {
    smallShipBoard.push(arr[i])
    if (arr[i][0] === max) {
      smallShipBoard.push([arr[i][0]-1, arr[i][1]])
    } else {
      smallShipBoard.push([arr[i][0]+1, arr[i][1]])
    }
  }
  return
}

const bigBoatPositions = (arr, min) => {
  for (let i = min; i < arr.length; i++) {
    bigShipBoard.push(arr[i])
    if (arr[i][0] > 3) {
      bigShipBoard.push([arr[i][0]-1, arr[i][1]])
      bigShipBoard.push([arr[i][0]-2, arr[i][1]])
    } else {
      bigShipBoard.push([arr[i][0]+1, arr[i][1]])
      bigShipBoard.push([arr[i][0]+2, arr[i][1]])
    }
  }
  return battleShipPlacer(smallShipBoard, bigShipBoard)
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
  return printBoard(board, true)
}


const printBoard = (board, debug) => {

  const boardRows = 'ABCDEF'
  if (debug === false) {
    for(let i = 0; i < board.length; i++) {
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
    for(let i = 0; i < board.length; i++) {
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
  if (wantToPlay === true) return selectBoardSize()
  if (wantToPlay === false) console.log('BUMMER!')
  return wantToPlay
}

const selectBoardSize = () => {
  console.log('What size board would you like to play on?')
  const answers = ['4X4 with 1 large boat & 1 small boat', '5X5 with 1 large boat & 2 small boats', '6X6 with 2 large boats & 2 small boats']
  const userAnswer = readlineSync.keyInSelect(answers, 'Choose your board size: ')
  if (userAnswer === 2) {
    board = board6x6
    firstPointCoordinate(4, 5)
    secondPointCoordinate(4, 5)
    convertSetsToArrays(point1, point2)
    smallBoatPositions(startingCoordinates, 5, 2)
    bigBoatPositions(startingCoordinates, 2)
    takeYourShot(board)
  }
  if (userAnswer === 1) {
    board = board5x5
    firstPointCoordinate(3, 4)
    secondPointCoordinate(3, 4)
    convertSetsToArrays(point1, point2)
    smallBoatPositions(startingCoordinates, 4, 1)
    bigBoatPositions(startingCoordinates, 2)
    takeYourShot(board)
  }
  if (userAnswer === 0) {
    board = board4x4
    firstPointCoordinate(2, 3)
    secondPointCoordinate(2, 3)
    convertSetsToArrays(point1, point2)
    smallBoatPositions(startingCoordinates, 3, 1)
    bigBoatPositions(startingCoordinates, 1)
    takeYourShot(board)
  }
}

const takeYourShot = (arg) => {
  let count = 0
  for (let i = 0; i < arg.length; i++) {
    for (let j = 0; j < arg[i].length; j++) {
      if (arg[i][j].id !== undefined && arg[i][j].hit === true) count++
    }
  }
  if (count === 5) {
    console.log(youWin)
    return
  }
  const shot = readlineSync.question('Enter a location to strike: ').toUpperCase()
  let letter = shot[0]
  let number = shot[1]
  let letterToIndex = alphabet.indexOf(letter)
  arg[letterToIndex][number].hit = true
  printBoard(arg, false)
  takeYourShot(arg)
}


greetUser()
