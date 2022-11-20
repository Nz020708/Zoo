
interface ITypeofAnimal{
    id:number;
    name:string;
    biome:string;
    isNeedforReservoir:boolean;
    area:number;
    fodder:string;
    typeofAnimal:Type;

}
interface IAnimal extends ITypeofAnimal{
    id:number;
    name:string;
    age:number;
    amountOfFood:number;
}
interface ISettlement {
    id:number;
    name:string,
    area:number,
    reservoir:boolean;
    biome:string;
    animals:IAnimal[]
}
type Type= 'predator' | 'herbivore';

//Animals

let leo:IAnimal={
id:1,
name:'Leo',
age:60,
biome:'savanna',
isNeedforReservoir:false,
area:40,
fodder:'meat',
typeofAnimal:"predator",
amountOfFood:200,
}
let alligator:IAnimal={
id:2,
name:'Tom',
age:85,
biome:'lake',
isNeedforReservoir:true,
area:30,
fodder:'meat',
typeofAnimal:"predator",
amountOfFood:300,
}
let flamingo:IAnimal={
id:3,
name:'Floggy',
age:40,
biome:'lake',
isNeedforReservoir:true,
area:30,
fodder:'meat',
typeofAnimal:"herbivore",
amountOfFood:200,
}
let parrot:IAnimal={
id:4,
name:'Paro',
age:24,
biome:'forest',
isNeedforReservoir:false,
area:15,
fodder:'seed',
typeofAnimal:"herbivore",
amountOfFood:150,
}
let monkey:IAnimal={
id:5,
name:'Walt',
age:53,
biome:'forest',
isNeedforReservoir:false,
area:22,
fodder:'banana',
typeofAnimal:"herbivore",
amountOfFood:320,
}
let eagle:IAnimal={
id:6,
name:'Eaggy',
age:105,
biome:'forest',
isNeedforReservoir:false,
area:90,
fodder:'meat',
typeofAnimal:"predator",
amountOfFood:500,
}
let tortoise:IAnimal={
id:7,
name:'Flippy',
age:135,
biome:'lake',
isNeedforReservoir:true,
area:50,
fodder:'greens',
typeofAnimal:"herbivore",
amountOfFood:300,
}


let enclosure1:ISettlement={
    id:1,
    name:'1st enclosure',
    area:70,
    reservoir:true,
    biome:'lake',
    animals:[]
}
let enclosure2:ISettlement={
    id:2,
    name:'2nd enclosure',
    area:90,
    reservoir:false,
    biome:'forest',
    animals:[]

}
let enclosure3:ISettlement={
    id:3,
    name:'3rd enclosure',
    area:80,
    reservoir:false,
    biome:'savanna',
    animals:[]

}

function placeAnimals(animal:IAnimal,enclosure:ISettlement) {
        if (animal.isNeedforReservoir===enclosure.reservoir && animal.biome===enclosure.biome && animal.area<=enclosure.area) {
                     
        console.log(`This enclosure is suitable for ${animal.name}.`); 
        checkType(animal,enclosure.animals);
       
        return  `${animal.name} added to ${enclosure.name}`;
            
        }
        else{
            console.log(`It is impossible to add "${animal.name}" to enclosure with ${enclosure.area}m area,${enclosure.biome} biome. `);
            return 'That is why adding failed.'
        }
 
}
function checkType(animal:IAnimal,animals:IAnimal[]) {
   for (let i = 0; i < animals.length; i++) {
    if ((animals[i].typeofAnimal=='predator' && animal.typeofAnimal=='herbivore') || (animals[i].typeofAnimal=='herbivore' && animal.typeofAnimal=='predator')) {
        console.log(`This enclosure is not suitable for ${animal.name},because types of animals are opposite. `);
        console.log('====================================');
    }
    else{
        animals.push(animal);
        
    }
    
   }
//    return animal && animals
}

 console.log(placeAnimals(alligator,enclosure1));
 console.log(placeAnimals(monkey,enclosure3));
 console.log(placeAnimals(leo,enclosure3));
 console.log(placeAnimals(tortoise,enclosure2));
 console.log(placeAnimals(parrot,enclosure2));
 console.log(placeAnimals(eagle,enclosure2));

 console.log('====================================');

 function showAnimals(enclosure:ISettlement) {
    console.log(`Animals in ${enclosure.name}:`);
    enclosure.animals.forEach(anm => {
    console.log(anm.name)
    if (enclosure.animals.length===0) {
        console.log("This enclosure is empty..");
        
    }
    return anm.name
})
}
showAnimals(enclosure1);
showAnimals(enclosure2);
showAnimals(enclosure3);


console.log(enclosure2.animals);