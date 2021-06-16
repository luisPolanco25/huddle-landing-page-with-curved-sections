(() => {

    'use strict'

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const p = document.querySelector('#email-validation');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
    
        if (!emailRegex.test(input.value)) {
            input.style.border = '1px solid hsl(0, 100%, 63%)';
            p.style.color = 'hsl(0, 100%, 63%)';
            p.innerText = 'Check your email please';
        } else {
            input.style.border = '1px solid #00ff00';
            p.style.color = '#00ff00';
            p.innerText = 'Submission succesfully sent!';
        }
        
    });

    input.addEventListener('keydown', () => {
        p.innerText = '';
        input.style.border = 'none';
    })

})()