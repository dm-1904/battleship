const readlineSync = require('readline-sync')
const youWin = `========
__   _______ _   _   _    _ _____ _   _
\ \ / /  _  | | | | | |  | |_   _| \ | |
 \ V /| | | | | | | | |  | | | | |  \| |
  \ / | | | | | | | | |/\| | | | | . ' |
  | | \ \_/ / |_| | \  /\  /_| |_| |\  |
  \_/  \___/ \___/   \/  \/ \___/\_| \_/
========`
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
// console.table(board)
// console.log(board[0][0])
// secondPointCoordinate(4, 5)
// firstPointCoordinate(4, 5)
// convertSetsToArrays(point1, point2)
// smallBoatPositions(startingCoordinates)

// create a function that can create any size board from an input
// create a helper that finds a random point on that board
// places small ship
// places large ship



const firstPointCoordinate = (quantity, max) => {
  while (point1.size !== quantity) {
    point1.add(Math.floor(Math.random() * max))
  }
  console.log(point1)
  return point1
}

const secondPointCoordinate = (quantity, max) => {
  while (point2.size !== quantity) {
    point2.add(Math.floor(Math.random() * max))
  }
  console.log(point2)
  return point2
}

const convertSetsToArrays = (set1, set2) => {
  set1 = Array.from(set1)
  set2 = Array.from(set2)
  for (let i = 0; i < set1.length && set2.length; i++) {
    startingCoordinates.push([set1[i], set2[i]])
  }
  console.log(startingCoordinates)
  return startingCoordinates
}

const smallBoatPositions = (arr, max, min) => {
  console.log(max)
  for (let i = 0; i < arr.length-min; i++) {
    smallShipBoard.push(arr[i])
    if (arr[i][0] === max) {
      smallShipBoard.push([arr[i][0]-1, arr[i][1]])
    } else {
      smallShipBoard.push([arr[i][0]+1, arr[i][1]])
    }
  }
  return //bigBoatPositions(startingCoordinates)
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
  // console.log(smallShipBoard)
  // console.table(smallShipBoard)
  // console.log(bigShipBoard)
  // console.table(bigShipBoard)
  return battleShipPlacer(smallShipBoard, bigShipBoard)
}



const battleShipPlacer = (smallArr, bigArr) => {
  // console.log("smallArr: ", smallArr);
  // console.log("bigArr: ", bigArr);
  for (let i = 0; i < smallArr.length; i++) {
    // console.log("smallArr elements: ", smallArr[i][0], smallArr[i][1]);
    let smallBoatCoordinate1 = smallArr[i][0]
    let smallBoatCoordinate2 = smallArr[i][1]

    // console.log("board position: ", board[smallBoatCoordinate1][smallBoatCoordinate2]);
    let smallBoatObj = board[smallBoatCoordinate1][smallBoatCoordinate2]
    smallBoatObj.type = 'small'
    smallBoatObj.id = 2
    // console.log(smallBoatCoordinate2)
    // console.log(smallArr[i][0], smallArr[i][1])
    // console.log(board[smallBoatCoordinate1][smallBoatCoordinate2])
    // console.log(board[0][0])
    // console.log(smallBoatObj)
  }
  // console.log(bigArr)
  for (let i = 0; i < bigArr.length; i++) {
    let bigBoatCoordinate1 = bigArr[i][0]
    let bigBoatCoordinate2 = bigArr[i][1]
    let bigBoatObj = board[bigBoatCoordinate1][bigBoatCoordinate2]
    bigBoatObj.type = 'large'
    bigBoatObj.id = 1
  }
  // console.table(printBoard(board, true))
  return printBoard(board, true)
}


const printBoard = (board, debug) => {
  const boardObj = {}
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
  }
  if (userAnswer === 1) {
    board = board5x5
    firstPointCoordinate(3, 4)
    secondPointCoordinate(3, 4)
    convertSetsToArrays(point1, point2)
    smallBoatPositions(startingCoordinates, 4, 1)
    bigBoatPositions(startingCoordinates, 2)
  }
  if (userAnswer === 0) {
    board = board4x4
    firstPointCoordinate(2, 3)
    secondPointCoordinate(2, 3)
    convertSetsToArrays(point1, point2)
    smallBoatPositions(startingCoordinates, 3, 1)
    bigBoatPositions(startingCoordinates, 1)
  }
}

const takeYourShot = () => {
  let count = 0
  console.table(boardObj)
  for (let i = 0; i < testBoard1.length; i++) {
    // console.log(el)
    for (let j = 0; j < testBoard1[i].length; j++) {
      // console.log(testBoard1[i][j].hit)
      if (testBoard1[i][j].id !== undefined && testBoard1[i][j].hit === true) count++

    }
  }
  if (count === 5) {
    console.log('YOU WIN!!!')
    return
  }
  // console.log(count)
  const shot = readlineSync.question('Enter a location to strike: ').toUpperCase()
  // let letter
  // let number
  // let letterToIndex
  let letter = shot[0]
  let number = shot[1]
  let letterToIndex = alphabet.indexOf(letter)
  testBoard1[letterToIndex][number].hit = true
  // console.log(testBoard1[letterToIndex][number].hit)
  printBoard(testBoard1, false)
  // console.table(boardObj)
  // console.log(testBoard1)
  takeYourShot()
  // console.log(letterToIndex)
  // console.log(boardObj[letter])
  // console.log(boardObj[letter][number])
  // // console.log(letter, number)
  // console.log(boardObj)
  // console.table(boardObj)
}

takeYourShot()
greetUser()
