class Dog {
constructor(name, location) {
  this.name = name
  this.location = location
  this.walks = []
  }

  speak() {
    console.log(`Woof! My name is ${this.name}`)
  }

  walk(location, distance)
    this.walks.push({location: location, distance: distance})
}

x = new Dog('Rover', 'Australia')
x.speak()

displayWalks() {
  for (const walk of this.walks) {
    console.log(`Walked for ${walk.distance}`)
  }
}
