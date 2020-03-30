function animatedForm(){
    const arrows = document.querySelectorAll('.fa-arrow-circle-down');

    

    arrows.forEach(arrow => {
        arrow.addEventListener('click', function(){
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            // Check for validation

            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'password' && validatePassword(input)){
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = 'shake 0.5s ease';
                errorMSG.style.animation = 'shake1 0.5s ease';
            }
            parent.addEventListener('animationend', ()=>{
                parent.style.animation = '';
                errorMSG.style.animation = '';
            })
        })
    })
}



const errorMSG = document.getElementById('error');
const error_message = document.querySelector('.error-message');

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
    errorMSG.innerText = '';
}


function validateUser(user){
    if(user.value.length <= 6){
        error_message.classList.add('error-active');
        errorMSG.innerText = 'Username must be longer than 6 characters..';
        error('rgb(189,87,87)');
    }else {
        error_message.classList.remove('error-active');
        error('rgb(87, 189, 130)');
        return true;
    }
}

function validatePassword(password) {
    if (password.value.length <= 6) {
        error_message.classList.add('error-active');
        errorMSG.innerText = 'Password must be longer than 6 characters..';
        error('rgb(189,87,87)');
    } else {
        error_message.classList.remove('error-active');
        error('rgb(87, 189, 130)');
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error_message.classList.remove('error-active');
        error('rgb(87, 189, 130)');
        return true;
    }else{
        error_message.classList.add('error-active');
        errorMSG.innerText = 'You have entered an invalid e-mail adress, please try again..';
        error('rgb(189,87,87)');
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}


animatedForm();