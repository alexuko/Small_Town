class Element{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area; //Kms
        this.numTrees = numTrees;
    }

    treeDensity(){
        const density = this.numTrees/ this.area;
        console.log(`${this.name} has a tree density of ${density} trees per sq Km.`);
    }    
}

class Street extends Element{
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size; // default = 3 = Normal
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${this.size} street`);
                
    };
};

const park1 = new Park('Old Green Park',1854,5.0,1500);
const park2 = new Park('New Red Park',1954,2.5,500);
const park3 = new Park('Small Blue Park',1900, 1.2, 200);

const allParks = [park1,park2, park3];

const streerM = new Street('Main Av', 1860,10,5);
const streerN = new Street('North St', 1895,1.5,1);
const streerS = new Street('South St', 1900,5.5,4);
const streerE = new Street('East St', 1925,3.5);
const streerW = new Street('West St', 1950,2.5,2);

const allStreets = [streerM,streerN, streerS, streerE, streerW];

function reportParks(parks){
    console.log('------------------ Parks Report ------------------')
    // Density
    parks.forEach(element => element.treeDensity());
};

function reportStreets(streets){
    console.log('------------------ Street Report ------------------')
        
};

reportParks(allParks);
reportStreets(allStreets);