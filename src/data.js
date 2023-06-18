const streetNames = [
    "Jana Pawła","Jarosława Kaczyńskiego",
    "Mirosława Wielkiego", "Powstania Warszawskiego", 
    "1 maja", "3 maja", "Mieszka 1","Ignacego Skorupki",
    "Adama Mickiewicza","Stanisława Lema"
];

const cityNames = [
    "Warszawa", "Poznań", "Wrocław", "Wyszków", "Kraków", 
    "Wieliczka", "Gdańsk", "Opole", "Sopot", "Pruszków"
];

const houseArea = [
    50, 60, 70, 80, 90, 100, 120, 130, 140, 160
];

const buildingYears = [
    1990, 1991, 1992, 1995, 1997, 1998, 2000, 2005, 2010, 2023
];
const houseArray = [];


let arrayHome = [];

const generateHouse = ()=> {

    return fetch('https://thishousedoesnotexist.org/').then(function (response) {
        return response.text();
      }).then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        return {
            street: streetNames[random(0,9)],
            city: cityNames[random(0,9)],
            houseArea: houseArea[random(0,9)],
            buildingYears: buildingYears[random(0,9)],
            img: doc.images[0].src,
        };
      }).catch(function (err) {
        console.warn('Something went wrong.', err);
      });

};

async function createArray() {
    let arrayHome = [];
    for (let index = 0; index < 51; index++) {
        const response = await generateHouse();
        arrayHome.push(response);
    }
    return arrayHome;

}



function random(min, max) {
	return min + Math.floor((max - min) * Math.random());
};



export {generateHouse, createArray};