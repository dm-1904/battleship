// const readlineSync = require('readline-sync')

// const youWin = `
// ========
// __   _______ _   _   _    _ _____ _   _
// \\ \\ / /  _  | | | | | |  | |_   _| \\ | |
//  \\ V /| | | | | | | | |  | | | | |  \\| |
//   \\ / | | | | | | | | |/\\| | | | | . ' |
//   | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
//   \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/
// ========`;

// console.log(youWin)

// const random = (max) => {
//   return Math.floor(Math.random() * max)
// }

// // a generalized function for the two functions below
// // const populateCoordinate = (quanity, max, set) => {
// //   while (set.size !== quanity) {
// //     set.add(Math.floor(Math.random() * max))
// //   }
// //   return set;
// // };

// // while (point.length !== 2) {
// //   // const filterPoint =
// //   if (!column.includes(point[1])) {
// //     point.push(random(6))
// //   }
// // }


// // const test = [random(6), random(6)]
// // console.log(test)



// // const set = new Set()
// // function myRandomInts(quantity, max){

// //   while(set.size < quantity) {
// //     set.add(Math.floor(Math.random() * max) + 1)
// //   }
// //   return set
// // }

// // function setShit (set) {
// //   set.forEach(element => {
// //     console.log(element)
// //   });
// // }

// // console.log(myRandomInts(6, 20))
// // setShit(set)


// // const point1 = new Set()
// // const point2 = new Set()
// // let pointsArr
// // const points = []

// // const pointFinder1 = (quantity, max) => {
// //   while (point1.size !== quantity) {
// //     point1.add(Math.floor(Math.random() * max) + 1)
// //   }
// //   return point1
// // }

// // const pointFinder2 = (quantity, max) => {
// //   while (point2.size !== quantity) {
// //     point2.add(Math.floor(Math.random() * max) + 1)
// //   }
// //   return point2
// // }

// // const pushPoints = (arr1, arr2) => {
// //   arr1 = Array.from(arr1)
// //   arr2 = Array.from(arr2)
// //   for (let i = 0; i < arr1.length && arr2.length; i++) {
// //     points.push([arr1[i], arr2[i]])
// //   }
// //   return points
// // }



// // console.log(pointFinder1(4, 6))
// // console.log(pointFinder2(4, 6))
// // console.log(pushPoints(point1, point2))


// // console.table({
// //   A: ["-", "🟠", "-"],
// //   B: ["-", "-", "❗"],
// //   C: ["-", "-", "-"],
// // });



// const testBoard1 = [
//   [
//     { type: "large", id: 1, hit: false }, // Represents position A0
//     { type: "small", id: 2, hit: true }, // Represents position A1
//     { type: "small", id: 2, hit: false }, // Represents position A2
//   ],
//   [
//     { type: "large", id: 1, hit: false }, // Represents position B0
//     { type: "empty", hit: false }, // Represents position B1
//     { type: "empty", hit: true }, // Represents position B2
//   ],
//   [
//     { type: "large", id: 1, hit: false }, // Represents position C0
//     { type: "empty", hit: false }, // Represents position C1
//     { type: "empty", hit: false }, // Represents position C2
//   ],
// ];


// const boardObj = {}

// const printBoard = (board, debug) => {

//   const boardRows = 'ABCDEF'
//   if (debug === false) {
//     for(let i = 0; i < board.length; i++) {
//       const row = board[i]
//       boardObj[boardRows[i]] = []
//       for (let j = 0; j < row.length; j++) {
//         const boatPosition = row[j]
//         if (boatPosition.hit === true && boatPosition.id === 2) {
//           boardObj[boardRows[i]].push('🟠')
//         }
//         if (boatPosition.hit === true && boatPosition.id === 1) {
//           boardObj[boardRows[i]].push('🔵')
//         }
//         if (boatPosition.hit === true && boatPosition.type === 'empty') {
//           boardObj[boardRows[i]].push('❗️')
//         }
//         if (boatPosition.hit === false) {
//           boardObj[boardRows[i]].push('-')
//         }
//       }
//     }
//   }
//   if (debug === true) {
//     for(let i = 0; i < board.length; i++) {
//       const row = board[i]
//       boardObj[boardRows[i]] = []
//       for (let j = 0; j < row.length; j++) {
//         const boatPosition = row[j]
//         if (boatPosition.id === 2) {
//           boardObj[boardRows[i]].push('🟠')
//         }
//         if (boatPosition.id === 1) {
//           boardObj[boardRows[i]].push('🔵')
//         }
//         if (boatPosition.type === 'empty') {
//           boardObj[boardRows[i]].push('-')
//         }
//       }
//     }
//   }
//   // console.table(boardObj)
//   return boardObj
// }

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// printBoard(testBoard1, false)
// // console.table(testBoard1)

// const takeYourShot = () => {
//   let count = 0
//   console.table(boardObj)
//   for (let i = 0; i < testBoard1.length; i++) {
//     // console.log(el)
//     for (let j = 0; j < testBoard1[i].length; j++) {
//       // console.log(testBoard1[i][j].hit)
//       if (testBoard1[i][j].id !== undefined && testBoard1[i][j].hit === true) count++

//     }
//   }
//   if (count === 5) {
//     console.log(youWin)
//     return
//   }
//   // console.log(count)
//   const shot = readlineSync.question('Enter a location to strike: ').toUpperCase()
//   // let letter
//   // let number
//   // let letterToIndex
//   let letter = shot[0]
//   let number = shot[1]
//   let letterToIndex = alphabet.indexOf(letter)
//   testBoard1[letterToIndex][number].hit = true
//   // console.log(testBoard1[letterToIndex][number].hit)
//   printBoard(testBoard1, false)
//   // console.table(boardObj)
//   // console.log(testBoard1)
//   takeYourShot()
  // console.log(letterToIndex)
  // console.log(boardObj[letter])
  // console.log(boardObj[letter][number])
  // // console.log(letter, number)
  // console.log(boardObj)
  // console.table(boardObj)
// }

// takeYourShot()


// var favChar = {
//   name: 'Michael Scott',
//   company: 'Dunder Mufflin',
//   designation: 'Regional Manager',
//   show: 'The Office'
// }

// favChar.designation = 'Hero of Threat Level Midnight'

// console.table(favChar)

/*  if (userAnswer === 2) {
    board = board6x6
    firstPointCoordinate(4, 5) firstPointQuantity, firstPointMax
    secondPointCoordinate(4, 5) secondPointQuantity, secondPointMax
    convertSetsToArrays(point1, point2)
    smallBoatPositions(startingCoordinates, 5, 2) smallBoatStartMax, smallBoatStartMin
    bigBoatPositions(startingCoordinates, 2) bigBoatMin
    takeYourShot(board, 10) hitsToWin
  }
*/

// new global variables
/*
firstPointQuantity
firstPointMax
secondPointQuantity
secondPointMax
smallBoatStartMax
smallBoatStartMin
bigBoatMin
hitsToWin
*/

// const gamePlayLoop = () => {
//   greetUser()
//   selectBoardSize()
//   firstPointCoordinate(firstPointQuantity, firstPointMax)
//   secondPointCoordinate(secondPointQuantity, secondPointMax)
//   convertSetsToArrays(point1, point2)
//   smallBoatPositions(startingCoordinates, smallBoatStartMax, smallBoatStartMin)
//   bigBoatPositions(startingCoordinates, bigBoatMin)

//   while (hits !== hitsToWin) {
//     // printBoard(board, false)
//     takeYourShot(board)
//   }

//   console.log(youWin)
//   playAgain()
// }

// Object.entries()
// .hasOwnProperty() //to check for hits




const boardMaker = (num) => {
  const blankBoardPoint = { type: "empty", hit: false }
  const board = []
  const boardArrTwo = []

  while (boardArrTwo.length !== num) {
    boardArrTwo.push(blankBoardPoint)
  }

  while (board.length !== num) {
    board.push(boardArrTwo)
  }
  return board
}


console.log(boardMaker(6))


//clone structuredClone()
//tenets of functional programming

const playAgain = () => {

  const again = readlineSync.keyInYN('Would you like to play again?')
  // console.log('again ', again)
  if (again) {
    return gamePlayLoop()
  }
  console.log(gameOver)
  process.exit()
}
