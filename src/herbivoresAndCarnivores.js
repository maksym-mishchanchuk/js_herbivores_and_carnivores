'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push((this));
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;

    if (animal.hidden === false
      && isHerbivore === true) {
      animal.health -= 50;
    }

    if (animal.health > 0) {
      return;
    }

    Animal.alive = Animal.alive
      .filter((oneAnimal) => oneAnimal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
