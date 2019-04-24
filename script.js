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
    constructor(name, buildYear, streetLength, size = 3){
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size; // default = 3 = Normal
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
                
    };
};

const park1 = new Park('Old Green Park',1854,5.0,100);
const park2 = new Park('New Red Park',1954,2.5,5000);
const park3 = new Park('Small Blue Park',1900, 1.2, 200);

const allParks = [park1,park2, park3];

const streerM = new Street('Main Av', 1860,10,5);
const streerN = new Street('North St', 1895,1.5,1);
 const streerS = new Street('South St', 1900,5.5,4);
const streerE = new Street('East St', 1925,3.5);
const streerW = new Street('West St', 1950,2.5,2);

const allStreets = [streerM,streerN, streerS, streerE, streerW];

function calc(arr){
    const sum = arr.reduce((prev,cur,index)=> prev + cur, 0 );

    return [sum, sum / arr.length];
}

function reportParks(parks){
    console.log('------------------ Parks Report ------------------')
    // Density
    parks.forEach(element => element.treeDensity()); 
    // Average Parks Age 
    const ages = parks.map(el => new Date().getFullYear() - el.buildYear)
    const [totalAge, avgAge] = calc(ages);
        console.log(`Our ${parks.length} parks have an average of ${Math.round(avgAge)} years`);
    // Which park has more than 1000 trees
    const idx = parks.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${parks[idx].name} has more than 1000 trees, a total of ${parks[idx].numTrees}`);

};

function reportStreets(streets){
    console.log('------------------ Street Report ------------------')
    const [totalStreets, averageLength] = calc(streets.map(el => el.streetLength));
    console.log(`Our ${streets.length}  streets have a total length of ${totalStreets} km, with an average of ${averageLength} km.`)

    //classify streets
    streets.forEach(el => el.classifyStreet())

        
};

reportParks(allParks);
reportStreets(allStreets);