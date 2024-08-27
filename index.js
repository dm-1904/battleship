const readlineSync = require('readline-sync')

const random = (max) => {
  return Math.floor(Math.random() * max)
}

const board6x6 = [[],[],[],[],[],[]]

const shipAssign = (arr) => {
    while (arr[0].length !== 6) {
      arr[0].push(random(3))
    }
  return shipAssign2(arr)
}
//combining for loops and while loops in shipAssign was buggy, so I created a second function

const shipAssign2 = (arr) => {
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < arr[i-1].length; j++){
      if(arr[i].length !== 6){
        if(i >= 3) {
          if(arr[i-1][j] && arr[i-2][j] && arr[i-3][j] === 2) {
            arr[i].push(random(2))
          }
        }
        if(i >= 2) {
          if(arr[i-1][j] && arr[i-2][j] === 1) {
            arr[i].push(random(1))
          }
        }

        if(arr[i-1][j] > 0) {
          arr[i].push(arr[i-1][j])
        } else {
          arr[i].push(random(3))
        }
        // if(i < 3) {
        //   if(arr[i-1][j] > 0) {
        //     arr[i].push(arr[i-1][j])
        //   } else {
        //     arr[i].push(random(3))
        //   }
        // }

      }

    }
  }
  console.table(arr)
}


shipAssign(board6x6)
