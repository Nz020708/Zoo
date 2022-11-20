//Animals
var leo = {
    id: 1,
    name: 'Leo',
    age: 60,
    biome: 'savanna',
    isNeedforReservoir: false,
    area: 40,
    fodder: 'meat',
    typeofAnimal: "predator",
    amountOfFood: 200
};
var alligator = {
    id: 2,
    name: 'Tom',
    age: 85,
    biome: 'lake',
    isNeedforReservoir: true,
    area: 30,
    fodder: 'meat',
    typeofAnimal: "predator",
    amountOfFood: 300
};
var flamingo = {
    id: 3,
    name: 'Floggy',
    age: 40,
    biome: 'lake',
    isNeedforReservoir: true,
    area: 30,
    fodder: 'meat',
    typeofAnimal: "herbivore",
    amountOfFood: 200
};
var parrot = {
    id: 4,
    name: 'Paro',
    age: 24,
    biome: 'forest',
    isNeedforReservoir: false,
    area: 15,
    fodder: 'seed',
    typeofAnimal: "herbivore",
    amountOfFood: 150
};
var monkey = {
    id: 5,
    name: 'Walt',
    age: 53,
    biome: 'forest',
    isNeedforReservoir: false,
    area: 22,
    fodder: 'banana',
    typeofAnimal: "herbivore",
    amountOfFood: 320
};
var eagle = {
    id: 6,
    name: 'Eaggy',
    age: 105,
    biome: 'forest',
    isNeedforReservoir: false,
    area: 90,
    fodder: 'meat',
    typeofAnimal: "predator",
    amountOfFood: 500
};
var tortoise = {
    id: 7,
    name: 'Flippy',
    age: 135,
    biome: 'lake',
    isNeedforReservoir: true,
    area: 50,
    fodder: 'greens',
    typeofAnimal: "herbivore",
    amountOfFood: 300
};
// let animals:IAnimal[]=[leo,alligator,flamingo,parrot,monkey,eagle,tortoise]
var enclosure1 = {
    id: 1,
    name: '1st enclosure',
    area: 70,
    reservoir: true,
    biome: 'lake',
    animals: []
};
var enclosure2 = {
    id: 2,
    name: '2nd enclosure',
    area: 90,
    reservoir: false,
    biome: 'forest',
    animals: []
};
var enclosure3 = {
    id: 3,
    name: '3rd enclosure',
    area: 80,
    reservoir: false,
    biome: 'savanna',
    animals: []
};
function placeAnimals(animal, enclosure) {
    if (animal.isNeedforReservoir === enclosure.reservoir && animal.biome === enclosure.biome && animal.area <= enclosure.area) {
        console.log("This enclosure is suitable for ".concat(animal.name, "."));
        checkType(animal, enclosure.animals);
        return "".concat(animal.name, " added to ").concat(enclosure.name);
    }
    else {
        console.log("It is impossible to add \"".concat(animal.name, "\" to enclosure with ").concat(enclosure.area, "m area,").concat(enclosure.biome, " biome. "));
        return 'That is why adding failed.';
    }
}
function checkType(animal, animals) {
    for (var i = 0; i < animals.length; i++) {
        // if ((animals[i].typeofAnimal=='predator' && animal.typeofAnimal=='herbivore') || (animals[i].typeofAnimal=='herbivore' && animal.typeofAnimal=='predator')) {
        //     console.log(`This enclosure is not suitable for ${animal.name},because types of animals are opposite. `);
        //     console.log('====================================');
        // }
        // else{
        return animals.push(animal);
        // }
    }
    //    return animal && animals
}
console.log(placeAnimals(alligator, enclosure1));
console.log(placeAnimals(monkey, enclosure3));
console.log(placeAnimals(leo, enclosure3));
console.log(placeAnimals(tortoise, enclosure2));
console.log(placeAnimals(parrot, enclosure2));
console.log(placeAnimals(eagle, enclosure2));
console.log('====================================');
function showAnimals(enclosure) {
    console.log("Animals in ".concat(enclosure.name, ":"));
    enclosure.animals.forEach(function (anm) {
        console.log(anm.name);
        if (enclosure.animals.length === 0) {
            console.log("This enclosure is empty..");
        }
        return anm.name;
    });
}
showAnimals(enclosure1);
showAnimals(enclosure2);
showAnimals(enclosure3);
console.log(enclosure2.animals);
