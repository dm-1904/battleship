const random = (max) => {
  return Math.floor(Math.random() * max)
}


// while (point.length !== 2) {
//   // const filterPoint =
//   if (!column.includes(point[1])) {
//     point.push(random(6))
//   }
// }


// const test = [random(6), random(6)]
// console.log(test)



// const set = new Set()
// function myRandomInts(quantity, max){

//   while(set.size < quantity) {
//     set.add(Math.floor(Math.random() * max) + 1)
//   }
//   return set
// }

// function setShit (set) {
//   set.forEach(element => {
//     console.log(element)
//   });
// }

// console.log(myRandomInts(6, 20))
// setShit(set)


const point1 = new Set()
const point2 = new Set()
let pointsArr
const points = []

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



console.log(pointFinder1(4, 6))
console.log(pointFinder2(4, 6))
console.log(pushPoints(point1, point2))
