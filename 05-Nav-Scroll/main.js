const navbarLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    navbarLinks.forEach(link => {
        const sectionId = link.getAttribute('href').slice(1); // Remove the "#" from the href
        // console.log(sectionId);
        const sectionElement = document.getElementById(sectionId);
        // console.log(sectionElement);
        
        if (sectionElement) {
            const sectionTop = sectionElement.offsetTop;
            console.log(sectionTop)
            const sectionHeight = sectionElement.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
});
