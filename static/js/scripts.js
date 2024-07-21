document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const today = new Date().toISOString().split('T')[0];
        
        if (date < today) {
            event.preventDefault();
            alert('The date cannot be in the past.');
        }
    });
});
