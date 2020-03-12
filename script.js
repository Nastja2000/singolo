/*... HEADER ...*/

const headerNavbar = document.querySelector('.navbar-list');

headerNavbar.addEventListener('click', function(event) {
    if (event.target.tagName !== 'LI') return;
    addActiveClass(event.target);

    window.location.hash = `${event.target.innerHTML}`;
});

const addActiveClass = (element) => {
    const currentActiveTab = document.querySelector('.active');
    if (currentActiveTab) currentActiveTab.classList.remove('active');

    element.classList.add('active');
}

/*... PORTFOLIO ...*/