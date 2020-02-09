require("dotenv").config();
require("../config/mongodb");
const bikeModel = require("../models/Bike")
const mongoose = require("mongoose");


const seedBike = [

// Aprilia

{
    name: 'RSV4 X',
    brand: 'Aprilia',
    engine: 1100,
    horsepower: 225,
    price: 39900,
    type: ["sportsbike"],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.aprilia.com/fr_FR/moto/'
},

// Arch


{
    name: 'KRGT-1',
    brand: 'Arch',
    engine: 2032,
    horsepower: 120,
    price: 70000,
    type: ["cruiser"],
    usage: [],
    A2: false,
    description: 'The ARCH KRGT-1 sets a new benchmark for the performance cruiser category. Powered by an ARCH / S&S 124ci V-Twin and with a distinctive aggressive profile the KRGT-1 is equally at home cruising highways or carving canyon roads. The ARCH Motorcycle KRGT-1 features bespoke Ohlins / ARCH suspension front and rear, coupled with BST carbon wheels which reduce unspring mass. These elements work as part of a chassis architecture developed to deliver incredible feedback and control. An all new ARCH / Bosch ABS system is fitted as standard, working with ISR radial calipers for optimum response and safety. The 124ci S&S V-Twin engine is tuned to deliver high torque on demand with enhanced performance through a unique ARCH downdraft breathing system incorporated between the stunning billet aluminum tank halves.',
    image: 'https://www.motorcyclistonline.com/resizer/OjelJRvZPXWsq7p75aSOTzYplrw=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VNUUMMUV7LB6DM42RWYSTR4VII.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/PlOnWXDKjCnee9oVfOUo6_aFKuQ=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/6HUJZDCX5GPCHGIO6LKPTMJAMQ.jpg', 'https://www.motorcyclistonline.com/resizer/xLXy1m89u9bFByD7kiEXhTeXcuY=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/P5VSU2NDGPLMGT5HMZ43PWEUJM.jpg'],
    link: 'https://www.archmotorcycle.com/krgt1'
},

// BMW

{
    name: '',
    brand: 'BMW',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.motobmw.fr/'
},

// Ducati


{
    name: '',
    brand: 'Ducati',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.ducati.com/fr/fr/home'
},


// Guzzi

{
    name: '',
    brand: 'Moto Guzzi',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.motoguzzi.com/fr_FR/motos/'
},

// Harley

{
    name: '',
    brand: 'Harley Davidson',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.harley-davidson.com/fr/fr/motorcycles/index.html'
},

// Honda 

{
    name: '',
    brand: 'Honda',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://moto.honda.fr/motorcycles/range.html'
},

// Indiana

{
    name: '',
    brand: 'Indiana',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.indianmotorcycle.fr/family/'
},



// Kawasaki
    {
        name: '',
        brand: 'Kawasaki',
        engine: ,
        horsepower: ,
        price: ,
        type: [],
        usage: [],
        A2: ,
        description: '',
        image: '',
        gallery: '',
        link: 'https://www.kawasaki.fr/fr/products'
    },
   

// KTM

{
    name: '',
    brand: 'KTM',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: ,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.ktm.com/'
},

// MV Augusta

{
    name: 'Rush 1000',
    brand: 'MV AUgusta',
    engine: 998,
    horsepower: 208,
    price: 33990,
    type: ['roadster', ],
    usage: [],
    A2: false,
    description: `MV Agusta's tagline is Motorcycle Art, and this new Rush 1000 continues that legacy. Based on the newly updated Brutale 1000 RR, the Rush 1000 supposedly takes inspiration from the drag-racing community to create a lustworthy machine that'll unwind a twisty road as well as rip down a dragstrip. MV claims the Rush 1000 is the only production bike using radial valves and titanium connecting rods, "crossing into the exclusive world of the hyper-naked motorcycle." Inside the inline four-cylinder motor are a new crankshaft and lighter pistons, as well as a revised combustion chamber layout.`,
    image: 'https://www.motorcyclistonline.com/resizer/J6-ynxZN9-S7Zllop4liaOfXrvs=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/AB4OARZ45KMEX7XP7LM5RXL33I.jpg',
    gallery: '',
    link: 'https://www.mvagusta.com/rush-1000'
},

// Suzuki


{
    name: '',
    brand: 'Suzuki',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: ,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.suzuki-moto.com/gamme-2020'
},

// Triumph

{
    name: '',
    brand: 'Triumph',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: false,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.triumphmotorcycles.fr/#'
},

// Yamaha 

{
    name: '',
    brand: 'Yamaha',
    engine: ,
    horsepower: ,
    price: ,
    type: [],
    usage: [],
    A2: ,
    description: '',
    image: '',
    gallery: '',
    link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
},
]



function seedDb(seedData) {
    bikeModel.insertMany(seedData)
        .then(bikes => console.log(bikes))
        .catch(err => console.log(err))
};


seedDb(seedSneakers);