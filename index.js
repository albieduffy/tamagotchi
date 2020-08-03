const prompt = require('prompt-sync')();

class Pet {
  constructor(name){
    this.name = name;
    this.happinessLevel = 0;
    this.hungerLevel = 0;
  }

  petInteraction() {
    let choice = prompt('What would you like to do with your Tamagotchi? (feed, play or checkin)');

    choice = choice.toLowerCase();

    switch(choice){
      case 'play':
        try {
          if (this.happinessLevel <= 1) {
            this.happinessLevel += Math.random();
            console.log(`Playing made ${this.name} happier!`);
            this.happinessLevel <= 0.5 ? console.log("Your tamagotchi is still looking glum, play with it!"): console.log("Your tamagotchi is starting get fed up, easy on the playtime!")
            this.hungerLevel -= Math.random() * 0.5;
            if(this.hungerLevel <= 0) {console.log("Your tamagotchi is looking famished, it needs something to eat!")};
            let next = prompt('Would you like to do anything else? (yes or no)');
            next === 'yes' ? this.petInteraction(): console.log('No problem!');
            // carryOn();
          } else {
            throw new IveHadEnoughError;
          }
        } catch (error) {
          console.error(`Your Tamagotchi has experienced an ${error.name}! It says ${error.message}!`);
        }
        break;

      case 'feed':
        try {
          if (this.hungerLevel <= 1) {
            this.hungerLevel += Math.random();
            console.log(`Feeding made ${this.name} fuller!`);
            this.hungerLevel <= 0.5 ? console.log("Your tamagotchi is still hungry, you should feed it more!") : console.log("Your tamagotchi is starting to look full, easy on the feeding!");
            this.happinessLevel -= Math.random() * 0.5;
            if(this.happinessLevel <= 0) {console.log("Your tamagotchi wants to lose some weight, play with it more!")};
            let next = prompt('Would you like to do anything else? (yes or no)');
            next === 'yes' ? this.petInteraction(): console.log('No problem!');
            // carryOn();
          } else {
            throw new ImFullError;
          }
        } catch (error) {
          console.error(`Your Tamagotchi has experienced an ${error.name}! It says ${error.message}!`)
        }
        break;
      case 'checkin':
        console.log(this);
        break;
      default:
        console.log("please type one of the following: feed, play or checkin");
        this.petInteraction();
    };

    // function carryOn() {
    //   let next = prompt('Would you like to do anything else? (yes or no)');
    //   next === 'yes' ? tamagotchi.petInteraction(): console.log('No problem!');
    // };

  };

};



class IveHadEnoughError extends Error {
    constructor(){
        super('Your tamagotchi has had enough of you for now!');
        this.name = 'IveHadEnoughError';
    };
};

class ImFullError extends Error {
    constructor(){
        super('Your tamagotchi is full for now!');
        this.name = 'ImFullError';
    };
};


function createPet() {
  let name = prompt('What is your Tamagotchi called?');
  let tamagotchi = new Pet(`${name}`);
  tamagotchi.petInteraction();
}

createPet();
//
// tamagotchi.petInteraction();
