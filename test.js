let dog = {
name: "doggie",
numLegs: 4
};


let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name);


  let dog = {
    name: "Spot",
    numLegs: 4,
  sayLegs: function() {return "This dog has 4 legs " + dog.name + ".";}
  };
  
  dog.sayLegs();


  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.name + " legs.";}
  };

  

  function Bird() {
    this.name = "Tina";
    this.color = "dark gray";
    this.numLegs = 10;
  }


  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let brownDog = new Dog();


  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }

  var terrier = new Dog();
  terrier.name = "tom";
  terrier.color = "brown";


  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(10);
  
  myHouse instanceof House;


  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  ownProps.push.canary


  function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype.numLegs = 2;
  // Only change code above this line
  let beagle = new Dog("Snoopy");


  
