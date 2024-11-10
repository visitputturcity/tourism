// Example of a simple animation effect
document.addEventListener("DOMContentLoaded", function() {
    const celebs = document.querySelectorAll('.celebrity');

    celebs.forEach(celeb => {
        celeb.addEventListener('mouseover', function() {
            celeb.style.borderColor = 'blue';
            celeb.style.transform = 'scale(1.05)';
        });

        celeb.addEventListener('mouseout', function() {
            celeb.style.borderColor = 'red';
            celeb.style.transform = 'scale(1)';
        });
    });
});
