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
    type: ["sportbike"]
    usage: [],
    A2: false,
    description: `It may be too late to get your hand on one of the 10 hand-built 2020 Aprilia RSV4 X superbikes, but you probably didn't have an extra $45,000 to blow on your next trackday bike anyway. Yet here we are, drooling over the most exotic RSV4 1100 ever made. The bike is built by hand, one at a time, by Aprilia Racing Factory technicians who meticulously equip this beautiful motorcycle with the latest technological advancements they have developed over the past decade of World Superbike and MotoGP competition.`,
    image: 'https://www.motorcyclistonline.com/resizer/L6Pp_9hk3aYGn1VxCItz8ae1Zog=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VUXO422RRC7UPHC632TJTBUAUE.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/VHcg2JmmnmBr8RL-k4qvVyx6n_s=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VC42IDBLBCSYHWFCTTFGHE3OYM.jpg', 'https://www.motorcyclistonline.com/resizer/v474liNTVnrFNAZVS-EnNSsrbbo=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/K7WQGZO6LUHYKL32SEUJ2ELFJE.jpg'],
    link: 'https://www.aprilia.com/fr_FR/moto/'
},

{
    name: 'RS 660',
    brand: 'Aprilia',
    engine: 660,
    horsepower: 95,
    price: 12000,
    type: ["sportbike"]
    usage: [],
    A2: false,
    description: ``,
    image: 'https://www.motorcyclistonline.com/resizer/o5njXTtkXe-MARjaGJ-PP-wnbH8=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ETZEBOMKTYWQRZLJ6BGRJSAOKU.jpg',
    gallery: [''],
    link: 'https://www.aprilia.com/fr_FR/landing/RS-660//'
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
    name: 'S 1000 XR',
    brand: 'BMW',
    engine: 999,
    horsepower: 165,
    price: 17000,
    type: ["sportbike", "dual-sport"],
    usage: [],
    A2: false,
    description: `BMW have given its S 1000 XR an extensive overhaul, with revisions being revealed during this year's EICMA show in Milan. Changes include an update to the 999cc engine, suspension refinements, new electronics, updated looks, and weight reduction over last year's model.`,
    image: 'https://www.motorcyclistonline.com/resizer/uyh2E2x3BsL_FlVTO32au31C87s=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/NY5TYOXCM4YKE66NLHNBSYZ4BE.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/LWT8H8K2oidnOY5bKflbfafD6gk=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4CDB5LHAFR577S5JLHJKCQDLEA.jpg'],
    link: 'https://www.motobmw.fr/'
},

{
    name: 'F 900',
    brand: 'BMW',
    engine: 895,
    horsepower: 105,
    price: 10995,
    type: ["sportbike", "dual-sport", "touring"],
    usage: [],
    A2: false,
    description: `As noted in the preview of the new F 900 R, the F 900 XR benefits from a newly developed 895cc parallel-twin engine with an eight-valve, DOHC cylinder head. The mill was first introduced in the 2018 F 850 GS, but now offers 105 hp and 67.8 pound-feet of torque, meaning the 482.8-pound ready-to-ride machine will pack enough of a punch to have some fun in the twisties. It’s equipped with an anti-hopping, mechanically operated clutch standard, which can be upgraded with BMW’s electronic quickshifter if desired.`,
    image: 'https://www.motorcyclistonline.com/resizer/zTUmcce9BUVMtxldmPg4JioZFu8=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7T5EQTUZYK6PTW2UV5W44IWCKU.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/tzFF99P8AhPgWSnJlf19VRjvJN4=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/R3PWM5CBYYL6TAHK2QBLAKGZQM.jpg', 'https://www.bmw-motorrad.fr/content/dam/bmwmotorradnsc/common/multiimages/images/models/adventure/f900xr/nsc-F900XR-2560x1440.jpg.asset.1571140838882.jpg'],
    link: 'https://www.motobmw.fr/'
},

{
    name: 'F 900 R',
    brand: 'BMW',
    engine: 895,
    horsepower: 105,
    price: 8870,
    type: ["roadster"],
    usage: [],
    A2: false,
    description: `The F 900 R is propelled by a larger-displacement liquid-cooled 895cc parallel twin with an eight-valve DOHC cylinder head. It gains 42cc via 2mm-larger cylinder bore (86mm). Forged pistons replace the cast components squeezing fuel to a lofty 13.1:1 compression ratio. The crankshaft fires at a 90-degree offset giving this powerplant the sound and feel of a 90-degree V-twin. Spent fuel is purged via an underbelly stainless steel exhaust.`,
    image: 'https://www.motorcyclistonline.com/resizer/LLyWviMOXAoxDhTAja5R2_LHgew=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/UGFIK2U3FIOTUFALTAPFELNLLE.jpg',
    gallery: [`https://www.motorcyclistonline.com/resizer/DZZVqhuH8Y25DDBbauU1-Hs8Lp4=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ABCBO6T5LHWJI2CHW2KNVAYBCQ.jpg`, 'https://www.motorcyclistonline.com/resizer/p2vxNv3oC1NiGBm3Y75WIR1MRCE=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/AWRGH3YHMETN3PJYIGFPO4NOSM.jpg'],
    link: 'https://www.motobmw.fr/'
},

// Ducati


{
    name: 'Panigale V2',
    brand: 'Ducati',
    engine: 995,
    horsepower: 155,
    price: 18290,
    type: ["sportbike"],
    usage: [],
    A2: false,
    description: `Perception colors everything we look at. Walmart shoppers will see the Panigale V2 as simply a warmed-over 959 Panigale—the last model from Ducati's "super-mid" line that began with the 748 and kept growing. Others might see a 21st-century reimagination of the revered 916 superbike from the 1990s, more powerful than any sub-liter Ducati production superbike ever built.`,
    image: 'https://www.motorcyclistonline.com/resizer/c8G_SkIHrw8N1uoxiI0qMiVXHAE=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/MBXIKDGBSG2DK3MMZBGKXC7K54.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/VS-fGb4G2Ic9M9s4kdaDQFzHdBg=/1199x839/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7QBMNWE4RZUBR7FVWI4SXPVH4Y.jpg', 'https://www.motorcyclistonline.com/resizer/v9amcF4apVTcn-L2u6314EFY5Jk=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/DBRBXVCOT5AFI4QEGIRJECCTVY.jpg'],
    link: 'https://www.ducati.com/fr/fr/home'
},

{
    name: 'Panigale V4 / V4S',
    brand: 'Ducati',
    engine: 1103,
    horsepower: 214,
    price: 23290,
    type: ["sportbike"],
    usage: [],
    A2: false,
    description: '',
    image: 'https://i.ytimg.com/vi/MzgIhPpASTg/maxresdefault.jpg',
    gallery: ['https://media.motoservices.com/media/cache/vehicle_detail/media/vehicle/1853/2018-ducati-panigale-v4-breaks-cover-and-is-amazing-121491-1.jpg',"https://www.motorcyclistonline.com/resizer/bKAX1FSQdIJR2Asnw-IXFBupHaw=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/J75AQ3UBV5KPIFUTWHT2NGFU2M.jpg"],
    link: 'https://www.ducati.com/fr/fr/home'
},

{
    name: 'Multistrada 1260 S GRand Tour',
    brand: 'Ducati',
    engine: 1262,
    horsepower: 158,
    price: 22690,
    type: ["sportbike", "Dual-sport", "Touring"],
    usage: [],
    A2: false,
    description: `Ducati has already announced that come next year, some version of the Desmosedici Stradale powerplant will make its way into the Multistrada. Until then, it's giving the 1,262cc DVT Testastretta Evoluzione DVT motor one last chance to shine in the Multistrada 1260 S Grand Tour.`,
    image: 'https://www.motorcyclistonline.com/resizer/Gq-Vu_UvO9t_NBY5PtBg_jXriIg=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ES3JSQ4WOEXVWJVEJRRHVGGSLQ.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/q8mDj7vZyqVGH5JOz2xXV1JtrJQ=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OGPJSYHFZYWGGD7WFGQWLG35GI.jpg', 'https://www.motorcyclistonline.com/resizer/a_HPJPzN4oDxELR__GwaWmt3wRc=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ENDROOZOUWIO4N7QTKJZV37VIA.jpg'],
    link: 'https://www.ducati.com/fr/fr/home'
},


// Guzzi

{
    name: 'V85 TT Travel',
    brand: 'Moto Guzzi',
    engine: 853,
    horsepower: 80,
    price: 13045,
    type: ["Dual-sport", "Touring"],
    usage: [],
    A2: true,
    description: `Meet the 2020 V85 TT Travel. Building off the success of the V85 TT adventure bike, the Travel will offer a compliment of touring accessories as standard equipment, including spacious panniers, a tall windscreen, heated grips, and LED driving lights. The Moto Guzzi MIA infotainment system offers smartphone connectivity and management of the electronic rider assist functions including three Ride Modes (Road, Rain, Off-road), and selectable traction control, all from the instrument panel.`,
    image: 'https://www.motorcyclistonline.com/resizer/qKDdk86EGdrGG6CTFniL2iisqWY=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RROPP7RCDFBHXMRQPPHUPVQMIU.jpg',
    gallery: ["https://www.motorcyclistonline.com/resizer/c7Ab7BB6SkL1jCww1ms5DZ6BOrU=/1199x1598/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WKWW6FFZESWWOZZHDYBNFVQUD4.jpg", "https://www.motorcyclistonline.com/resizer/K9UY7X5hfb8J9I-V_nFUObAMEU0=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/XHGHSON6ZGWTDKTBGXTBY4CL5Q.jpg"],
    link: 'https://www.motoguzzi.com/fr_FR/motos/'
},

{
    name: 'V7 III Stone S',
    brand: 'Moto Guzzi',
    engine: 744,
    horsepower: 52,
    price: 8599,
    type: ["Standard-retro"],
    usage: [],
    A2: true,
    description: 'The Stone S calls on the tradition of Moto Guzzi’s performance models of the 1970s including the 1974 750 S and the 1971 V7 Sport with its S designation and follows the exclusive nature of those motorcycles by being limited to just 750 units. Each Stone S produced will have its serial number engraved on the handlebar riser clamp, the only 2020 V7 III model to do so.',
    image: 'https://www.motorcyclistonline.com/resizer/w_pJ3aZ9HPS8DIoU6qtf6Q7aHa8=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/66YYEIOXVPWTVQLLBEOSZGRMFY.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/X8LuqUCUTMamAMwPGY246WJDwz4=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/HKEZX4BO2463S4KOBN6Y6LLUOE.jpg', "https://www.motorcyclistonline.com/resizer/d4v7gQ1m1tqvqse0xCnpU2zrqJU=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/KU2F2CNA2GFPM4LZ5MTCRPVX3U.jpg" ],
    link: 'https://www.motoguzzi.com/fr_FR/motos/'
},

// Harley

{
    name: 'Low Rider S',
    brand: 'Harley Davidson',
    engine: 1868,
    horsepower: 93,
    price: 19990,
    type: ["Cruiser"],
    usage: [],
    A2: false,
    description: 'The new Low Rider S is an up-spec and completely blacked-out version of the popular Low Rider that has been a mainstay in the H-D lineup for years. The comfortable riding position starts with a motocross-style handlebar, forward controls, combined with a low (26.5 inches) seat height, and the fun comes courtesy of its Milwaukee-Eight 114 engine.',
    image: 'https://www.motorcyclistonline.com/resizer/XXqaHdrUIIZnNtjQLjaVgKiLZgQ=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/HYHQ5N632K5B4E4C6ALC4FOOW4.jpg',
    gallery: ['https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/low-rider-s/paint-360/dom/c25/20-hd-low-rider-s-bike-c25-01.jpg', ],
    link: 'https://www.harley-davidson.com/fr/fr/motorcycles/index.html'
},

{
    name: 'Road Glide Limited',
    brand: 'Harley Davidson',
    engine: 1868,
    horsepower: 89,
    price: 26690,
    type: ['Touring'],
    usage: [],
    A2: false,
    description: 'Harley calls the Road Glide Limited its "fully loaded Grand Touring machine" because it comes with all the latest in creature comforts designed to make your long-distance ride as comfortable as possible. It starts up front with the frame-mounted fairing, 13.5-inch windshield, and Boom! Box GTS infotainment center with H-D Connect service. Its big Milwaukee-Eight 114 engine is tuned for torque, giving the rider access to loads of pulling power at the twist of a wrist, and the ultra-bright dual Daymaker Reflector LED headlights are there to shed some light on things if your route takes you into the night. The huge Tour-Pak carrier system features three massive saddlebags and top case to haul your various personal items while the electronic Reflex Linked Brembo brakes with ABS help you remain safe throughout the ride. All of this is available with the chrome package or a blacked-out version.',
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/touring/road-glide-limited/gallery/20-touring-road-glide-limited-gallery-10.jpg?impolicy=myresize&rw=1137',
    gallery: [''],
    link: 'https://www.harley-davidson.com/fr/fr/motorcycles/index.html'
},

{
    name: 'Streetfighter',
    brand: 'Harley Davidson',
    engine: 975,
    horsepower: 115,
    price: TBD,
    type: ["Roadster"],
    usage: [],
    A2: false,
    description: `Harley-Davidson formally announced a number of new motorcycles, including this upright naked-style streetbike. Dubbed a streetfighter, The Motor Company says this prototype will make its way to production for the 2020 model year. The engine is a version of Harley’s new multi-purpose water-cooled V-twin that powers both the Pan America adventure-bike and the company's new roadster-looking custom, only smaller, with an 975cc capacity according to Harley. Similarly to the other three models, the engine appears to employ a 60-degree vee with large cylinder heads hide a pair of double overhead camshafts. This will help give the necessary power and performance that a modern naked bike needs to compete in this red-hot segment. A low-mounted slash-cut exhaust looks tough and sounds the part, too, based on what we heard during Harley-Davidson’s promotional video. The tubular steel frame also appears similar to the custom/roadster unit, but the streetfighter gets a stubbier and more rigid-looking swingarm, most likely to boost maneuverability and rear grip during fast-paced rides. The prototype rolls on conventionally sized (within the class) 17-inch spoke alloy wheels shod in Michelin’s older-style Pilot Power 2CT rubber, in traditional sizes (120/70-17 front, 180/55-17 rear).`,
    image: 'https://www.motorcyclistonline.com/resizer/5J8NhgM1_K-jnO09cCjxPnWtDJY=/1199x899/filters:focal(500x375:501x376)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/5OFFBIBNMF6U53KCPQFXIQWBQY.jpg',
    gallery: ['https://i.pinimg.com/originals/f0/a6/a0/f0a6a0b720c00d3429ebcb712409342e.jpg'],
    link: 'https://www.harley-davidson.com/fr/fr/motorcycles/index.html'
},

{
    name: 'CVO Street Glide',
    brand: 'Harley Davidson',
    engine: 1923,
    horsepower: 106,
    price: 40090,
    type: ["Touring"],
    usage: [],
    A2: false,
    description: '',
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/touring/street-glide/overview/dom/19-touring-street-glide-hero.jpg',
    gallery: ['https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/cvo/cvo-street-glide/overview/hdi/19-cvo-cvo-street-glide-hdi-hero.jpg', "https://www.motorcyclistonline.com/resizer/bjN6zQ5D-Ut0eU1LHfwQL1Mg0_E=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RAEOMLGDM6MCBF42W7R5AGSPP4.jpg"],
    link: 'https://www.harley-davidson.com/fr/fr/motorcycles/index.html'
},



// Honda 

{
    name: 'Africa Twin',
    brand: 'Honda',
    engine: 1084,
    horsepower: 130,
    price: 14499,
    type: ["Dual-sport", "Touring"],
    usage: [],
    A2: false,
    description: `Honda appears to be getting more comfortable with the rider assist technology these days too. The new Africa Twins features a seven-level Honda Selectable Torque Control (HSTC), six ride modes, wheelie control, engine-braking control, selectable cornering ABS (this was offered on the previous model), and it now comes with cruise control. All of these functions can be monitored and adjusted via the new 6.5-inch TFT touchscreen display which is compatible with Apple CarPlay. Where Honda seemed to avoid electronic gizmos on the first generation, this version has almost all of them.`,
    image: 'https://www.motorcyclistonline.com/resizer/Lefmo7C_4wtsY-W4lCvOL3ejjKY=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/3XW4PO7NTQPW5PF3MWIN7O2G4Y.jpg',
    gallery: ['https://www.motorcyclistonline.com/resizer/a-eeOhjXK9TMJAvszIg4wL-IO6g=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OROJTQVU5WIGUF6SMGN5ZGUIVY.jpg', 'https://www.motorcyclistonline.com/resizer/z3AWGASbbB3y9pvB3m9sR7HU-6Q=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/Q2LYCHJ7EAIH3CFY5ZQAUYACJI.jpg'],
    link: 'https://moto.honda.fr/motorcycles/range.html'
},


{
    name: 'Rebel 300',
    brand: 'Honda',
    engine: 286,
    horsepower: ,
    price: ,
    type: ["Cruiser"],
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
    gallery: [''],
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