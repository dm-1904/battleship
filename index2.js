// /* create an array of arrays with 1s and 2s. Those arrays will be pushed onto the board in a random order by index value
// how do I limit the length of the array? if(arr.length === 4) do not push an array longer than 2 into it for a max length of 6 */

// const random = (max) => {
//   return Math.floor(Math.random() * max)
// }

// const betweenRandom = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min)
// }

// console.log(betweenRandom(9, 3))
// const onlyLittleShip = random(2)

// const bigShip = [2, 2, 2]
// const littleShip = [1, 1]
// const board6x6 = [[],[],[],[],[],[]]
// const board5x5 = [[],[],[],[],[]]
// const board4x4 = [[],[],[],[]]

// //if arr.length < 5 Math.random(2) || if length = 5 arr.push(0)

// const shipAssign = (board) => {
//   let littleShipCounter = 0
//   for(let i = 0; i < board.length; i++) {
//     while (board[i].length !== 6) {
//       if (random(3) === 1) {
//         board[i].push(...littleShip)
//         littleShipCounter++
//       } else {
//         board[i].push(betweenRandom(3,9))
//       }
//       if (board[i].length === 4) {
//         if (random(2) === 1) {
//           board[i].push(...littleShip)
//           littleShipCounter++
//         } else {
//           board[i].push(0)
//         }
//       }
//       if (board[i].length === 5) {
//         board[i].push(0)
//       }
//     }
//   }
//   console.table(board)
// }

// // const shipAssign = (board) => {
// //   let i = 0
// //   let littleShipCounter = 0
// //   while (board[i].length !== 6) {
// //     if (random(3) === 1) { //console.log('true')
// //       board[i].push(...littleShip)
// //       littleShipCounter++
// //     } else { //console.log('false')
// //       board[i].push(betweenRandom(3, 5))
// //     }
// //     if (board[i].length === 4) {
// //       if (random(2) === 1) {
// //         board[i].push(...littleShip)
// //       } else {
// //         board[i].push(random(2))
// //       }
// //     }
// //     if (board[i].length === 5) {
// //       board[i].push(0)
// //     }
// //     // console.log('board0:' + board[0])
// //     //i++
// //   }

// // console.table(board)
// // }



// shipAssign(board6x6)
