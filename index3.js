const board6x6 = []
const board5x5 = []
const board4x4 = []
const random = (max) => {
  return Math.floor(Math.random() * max)
}

const howManyLittleBoats = (board) => {
  while (board.length !== 4) {
    littleBoatAssign(board)
  }
  return howManyBigBoats(board)
}

const littleBoatAssign = (board) => {
  let point = []
  let secondPoint = []
  while (point.length !== 2) {
    point.push(random(6))
  }
  board.push(point)
  if (point[0] === 5) {
    secondPoint.push(4, point[1])
    board.push(secondPoint)
  } else {
      secondPoint.push(point[0]+1, point[1])
      board.push(secondPoint)
    }
  return board
}


const howManyBigBoats = (board) => {
  while (board.length !== 10) {
    bigBoatAssign(board)
  }
  return board
}

const bigBoatAssign = (board) => {
  let point = []
  let secondPoint = []
  let thirdPoint = []
  while (point.length !== 2) {
    point.push(random(6))
  }
  board.push(point)
  if (point[0] === 5) {
    secondPoint.push(4, point[1])

    thirdPoint.push(3, point[1])
    board.push(secondPoint)
    // console.log(thirdPoint)
    board.push(thirdPoint)
  } else {
      secondPoint.push(point[0]+1, point[1])

      thirdPoint.push(point[0]+2, point[1])
      board.push(secondPoint)
      // console.log(thirdPoint)
      board.push(thirdPoint)
    }
  return board
}



// littleBoatAssign(board6x6)
// console.log(howManyLittleBoats(board6x6))
console.table(howManyLittleBoats(board6x6))
