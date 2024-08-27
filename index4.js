

const point1 = new Set()
const point2 = new Set()
let pointsArr
const points = []
const board = []

const pointFinder1 = (quantity, max) => {
  while (point1.size !== quantity) {
    point1.add(Math.floor(Math.random() * max) + 1)
  }
  return point1
}

const pointFinder2 = (quantity, max) => {
  while (point2.size !== quantity) {
    point2.add(Math.floor(Math.random() * max) + 1)
  }
  return point2
}

const pushPoints = (arr1, arr2) => {
  arr1 = Array.from(arr1)
  arr2 = Array.from(arr2)
  for (let i = 0; i < arr1.length && arr2.length; i++) {
    points.push([arr1[i], arr2[i]])
  }
  return points
}

const smallBoatPositions = (arr) => {
  for (let i = 0; i < arr.length-2; i++) {
    board.push(arr[i])
    if (arr[i][0] === 6) {
      board.push([arr[i][0]-1, arr[i][1]])
    } else {
      board.push([arr[i][0]+1, arr[i][1]])
    }
  }
  return bigBoatPositions(points)
}

const bigBoatPositions = (arr) => {
  for (let i = 2; i < arr.length; i++) {
    board.push(arr[i])
    if (arr[i][0] > 4) {
      board.push([arr[i][0]-1, arr[i][1]])
      board.push([arr[i][0]-2, arr[i][1]])
    } else {
      board.push([arr[i][0]+1, arr[i][1]])
      board.push([arr[i][0]+2, arr[i][1]])
    }
  }
  console.table(board)
  return board
}



pointFinder1(4, 6)
pointFinder2(4, 6)
pushPoints(point1, point2)
smallBoatPositions(points)
