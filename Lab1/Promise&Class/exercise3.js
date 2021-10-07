
let promise1 = 101
let promise2 = 'follow the white'
let promise3 = new Promise((resolve, reject) => {
  resolve('rabbit...')
})

// call all promises 
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values)
})