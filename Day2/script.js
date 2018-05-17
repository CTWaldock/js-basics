class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.walks = [];
}

speak() {
  console.log(`Woof! My name is ${this.name}!`);
  console.log(`Woof! My location is ${this.location}!`);
  }

walk(thisDogLocation, thisDogDistance ) {
  this.walks.push({location: thisDogLocation, distance: thisDogDistance})
  }

displayWalks() {
  let dWalks;
  this.walks.forEach(walk => {
    const p = document.createElement("p");
    p.innerHTML = walk.location;
    document.body.appendChild(p);
  });
  }

  totalDistance() {
    let distance = 0;
    this.walks.forEach(walk => {
      distance = distance + walk.distance;
    });
    document.getElementById('kmtotal').innerHTML = `Total dog travel is ${distance}km!`;
  }

  walkDog() {
  for (let i = 0; i < 3; i++) {
    const l = prompt('Woof! Where do you want to walk too?');
    const d = parseInt(prompt('Woof! What distance is it?'));
    this.walk(l, d);
     }
   }
}


const moshie = new Dog('Moshie', 'Brisbane');
const meeks = new Dog('Meeks', 'Munruben');
