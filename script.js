document.addEventListener("DOMContentLoaded", function() {
    const contentSections = document.querySelectorAll('.content');

    window.addEventListener('scroll', function() {
        contentSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.7);

            if (isVisible) {
                section.classList.add('active');
            }
        });
    });
});

