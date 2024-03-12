/* /////////////////////////////////////////////////////// 
                EVENT LISTENERS 
/////////////////////////////////////////////// */
const main = document.querySelector('main');
const card = document.querySelector('.card');
const employee = document.querySelectorAll('.employee');
const modal = document.querySelector('.modal');
const button = document.querySelector('.button');

employee.forEach( (item) => {
    item.addEventListener( 'click', (e) => {
        if (item === e.target) {
            modal.style.display = 'grid';
        }
    });
});

modal.addEventListener( 'click', (e) => {
    if (button === e.target) {
        modal.style.display = 'none';
    }
});



/* /////////////////////////////////////////////////////// 
                FETCH API 
/////////////////////////////////////////////// */

const link = 'https://randomuser.me/api/?results=12&inc=name,location,email,picture,phone,dob';
let employees = [];

fetch(link)
    .then( res => res.json() )
    .then( data => data.results )
    .then(displayEmployees)
    .catch( err => console.log(err) )


function displayEmployees(employeeData) {
    employees = employeeData;

    let employeeHTML = '';
    employees.forEach( (employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture.thumbnail;

    employeeHTML += `
        <div class="employee">
            <img src="${picture}" alt="${name.first} ${name.last} headshot">
            <h2>${name.first} ${name.last}</h2>
            <span class="employee-email">${email}</span>
            <span class="employee-city">${city}</span>
        </div>
    `
    });

    //main.innerHTML = employeeHTML;
    card.innerHTML = employeeHTML;
}


































