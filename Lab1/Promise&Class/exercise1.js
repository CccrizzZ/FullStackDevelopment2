
// parent class
class Car {
  constructor(model, year){
    this.model = model
    this.year = year
  }

  detail = () => {
    return "Model: " + this.model + " Year: " + this.year
  }
}


// sub class
class Sedan extends Car {
  constructor(model, year, balance){
    super(model, year)
    this.balance = balance
  }

  info = () => {
    return this.model + " has a balance of: " + this.balance
  }
}



let car = new Car('Ford Mustang', 2019)
console.log(car.detail())

let car1 = new Sedan('Ford Mustang', 2013, 25000)
console.log(car1.info())

