let me = {};
me.name = 'Nic';
me.age = 18;
me.location = 'Brisbane';

// function print_details(stuff){
//   console.log(stuff.name),
//   console.log(stuff.age),
//   console.log(stuff.location)
// }

console.log(me.age, me.location);

me.hobbies = ['table tennis', 'cars', 'gaming'];

console.log(me.hobbies);

delete me.age;


me.hobbies.map(hobbie => console.log(`I love ${hobbie}.`));

me.hobbies.push('Coding');

console.log(me.hobbies);

delete me.hobbies[0];

console.log(me.hobbies);

me.mother = {};

console.log(me.mother);

me.mother = { name: 'Gayle', age: 21, location: 'Brisbane'};

console.log(me.mother);

console.log(me);

me.print_details = function() {
  console.log(this.name);
  console.log(this.age);
  console.log(this.hobbies);
}

me.print_details()

console.log('----------------------------------------------------------');

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

console.log(`${coder_academy.brisbane.street}, ${coder_academy.brisbane.state}`)
