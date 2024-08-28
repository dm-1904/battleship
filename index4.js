const point1 = new Set()
const point2 = new Set()
const points = []
const smallShipBoard = []
const bigShipBoard = []

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
    smallShipBoard.push(arr[i])
    if (arr[i][0] === 6) {
      smallShipBoard.push([arr[i][0]-1, arr[i][1]])
    } else {
      smallShipBoard.push([arr[i][0]+1, arr[i][1]])
    }
  }
  return bigBoatPositions(points)
}

const bigBoatPositions = (arr) => {
  for (let i = 2; i < arr.length; i++) {
    bigShipBoard.push(arr[i])
    if (arr[i][0] > 4) {
      bigShipBoard.push([arr[i][0]-1, arr[i][1]])
      bigShipBoard.push([arr[i][0]-2, arr[i][1]])
    } else {
      bigShipBoard.push([arr[i][0]+1, arr[i][1]])
      bigShipBoard.push([arr[i][0]+2, arr[i][1]])
    }
  }
  console.table(smallShipBoard)
  console.table(bigShipBoard)
  return boardFiller(smallShipBoard, bigShipBoard)
}

const board = []
const boardFiller = (smallArr, bigArr) => {
  if(points.length === 4) {

  }
  for(let i = 0; i <smallArr.length; i++) {

  }
}

pointFinder1(4, 6)
pointFinder2(4, 6)
pushPoints(point1, point2)
smallBoatPositions(points)
