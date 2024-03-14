const main = document.querySelector('main');
const card = document.querySelector('.card');
const employee = document.querySelectorAll('.employee');
const modContainer = document.querySelector('.container');
const modal = document.querySelector('.modal');
const button = document.querySelector('.button');


const link = 'https://randomuser.me/api/?nat=us&results=12&inc=name,location,email,picture,cell,dob';
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
        <div class="employee" data-index="${index}">
            <img src="${picture}" alt="${name.first} ${name.last} headshot">
            <h2>${name.first} ${name.last}</h2>
            <span class="employee-email">${email}</span>
            <span class="employee-city">${city}</span>
        </div>
    `
    });

    card.innerHTML = employeeHTML;
}


function displayModal(index) {

    let {name, dob, cell, email, location: {city, street, state, postcode}, picture } = employees[index];

    let date = new Date(dob.date);

    const modalHTML = `
        <div class="modal">
            <button class="button" type="button">X</button>
            <img src="${picture.thumbnail}" alt="${name.first} ${name.last} headshot">
            <h3>${name.first} ${name.last}</h3>
            <span class="modal-email">${email}</span>
            <span class="modal-city">${city}</span>
            <span class="modal-number">${cell}</span>
            <span class="modal-address">${street.number} ${street.name}, ${city}, ${state} ${postcode}</span>
            <span class="modal-bday">Birthday: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</span>
        </div>
    `;

    modContainer.innerHTML = modalHTML;
}


main.addEventListener( 'click', e => {
    if (e.target !== main) {
        const cardy = e.target.closest(".employee");
        const index = cardy.getAttribute('data-index');

        modContainer.style.display = 'grid';
        displayModal(index);
    } 
});


modContainer.addEventListener('click', () => {
    modContainer.style.display = 'none';
});


































