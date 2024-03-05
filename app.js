/* /////////////////////////////////////////////////////// 
                EVENT LISTENERS 
/////////////////////////////////////////////// */
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

















































