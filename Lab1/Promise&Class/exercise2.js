
// the promise test and reject if the value is less than or resolve it if greater than 10
let CompareNumToTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      reject(num + ' is less than 10, error')
    }else{
      resolve(num + ' is greater than 10, sucess')
    }
  })
}


CompareNumToTen(15)
.then((result) => console.log(result))
.catch((error) => console.log(error))

CompareNumToTen(8)
.then((result) => console.log(result))
.catch((error) => console.log(error))