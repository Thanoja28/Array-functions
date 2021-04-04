const employees = [ { first: "Thanoja", last: "Thangaraja", salary: 400 },
                    { first: "Ram", last: "Ratnakumar", salary: 500},
                    { first: "Inthuka", last: "Reelan", salary: 700},
                    { first: "Helen", last: "Hovice", salary: 2000 },
                    { first: "Amiya", last: "graisen", salary: 3000},
                    { first: "Royal", last: "veeman", salary: 5000},
                    ]


// filter to get info on the persons with salary more than £2000.
const upsalary = employees.filter(employee => {
  if(employee.salary >= 2000) {
    return true;
  }
  else {
    return false;
  }
});
console.table(upsalary);

// map to get info first names whose salary less than 500
const firstLastName = employees.map(employee => {
  if(employee.salary <= 700) {
    return `${employee.first}, ${employee.last}`
  }
  else
  {
    return "No names found"
  }
});
console.table(firstLastName);

// sort to get info on salary of employees

const employeeSalary = employees.sort((a, b) => {
  if(a.first > b.first) {
    return 1
  }
  else {
    return -1
  }
});
console.table(employeeSalary);

// https://en.wikipedia.org/wiki/List_of_areas_of_London - sorting cities in london

const cities = document.querySelector('.vector-menu-content');
const links = Array.from(cities.querySelectorAll('a'));

const en = links.map(link => link.textContent)
                .filter(name => name.includes('en'));

// -----------------------------------------------------------------

const persons = [ "Alan, William", "Vishu, Henry", "Sita, Ram", "Nehru, Hoise", "Cindrella, Noel", "Thanu, Rasan", "Giri, Whale", "Gajini, Nimal" ]
// sort last names alphabetically

const sortAlpha = persons.sort((firstone, nextone) => {
  const [aFirst, aLast] = firstone.split(', ');
  const [bFirst, bLast] = nextone.split(', ');
  return aLast > bLast ? 1 : -1;
  console.log(sortAlpha);
});

// using reduce sum up each of the values in the object.
const flowers = ["Jasmine", "Rose", "Lily", "Lotus", "Jasmine", "Rose", "Lily", "Lotus", "Jasmine", "Rose", "Lily", "Lotus", "Sun Flower", "Hibiscus", "Tulip", "Water Lily", "Sun Flower", "Hibiscus", "Tulip", "Water Lily"]
const sum = flowers.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 0
  }
  obj[item]++;
  return obj;
  console.log(sum);
}, {});

