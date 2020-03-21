/* General staff*/
window.onload = () => {
    scrollActive();
}


let images = [
    '<img src="./assets/images/portfolio-part/second/yellow_submarine.png" alt="yellow_submarine">',
    '<img src="./assets/images/portfolio-part/second/blond-fiona.png" alt="blond-fiona">',
    '<img src="./assets/images/portfolio-part/second/doodling.png" alt="doodling">',
    '<img src="./assets/images/portfolio-part/second/robot.png" alt="robot">',
    '<img src="./assets/images/portfolio-part/second/party_in_da_house.png" alt="party_in_da_house">',
    '<img src="./assets/images/portfolio-part/second/sdk_ide_etc.png" alt="sdk_ide_etc">',
    '<img src="./assets/images/portfolio-part/second/spore.png" alt="spore">',
    '<img src="./assets/images/portfolio-part/second/chikens.png" alt="chikens">',
    ' <img src="./assets/images/portfolio-part/second/green_monster.png" alt="green_monster">',
    '<img src="./assets/images/portfolio-part/second/some_words.png" alt="some_words">',
    '<img src="./assets/images/portfolio-part/second/white_moster.png" alt="white_moster">',
    '<img src="./assets/images/portfolio-part/second/brown_staff.png" alt="brown_staff">'
];

const addActiveClass = (element, activeClass) => {

    const currentActiveTab = document.querySelector(`.${activeClass}`);
    if (currentActiveTab) currentActiveTab.classList.remove(activeClass);

    element.classList.add(activeClass);
};

const insertImagesToExamples = (arrayOfImages) => {
    let examples = document.querySelectorAll('.examples-list .examples-item ');
    let i = 0;
    examples.forEach(example => {
        example.innerHTML = arrayOfImages[i];
        i++;
    });
};

insertImagesToExamples(images);

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const generateDomElement = (node, element, ...classes) => {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
}

const swap = (firstElement, secondElement) => {
    [firstElement, secondElement] = [secondElement, firstElement];
}

/*... HEADER ...*/

/* Highlight current tab */

const headerNavbar = document.querySelector('.navbar-list');
const headerNavbarClass = 'active';
headerNavbar.addEventListener('click', function(event) {
    if (event.target.tagName !== 'LI') return;
    addActiveClass(event.target, headerNavbarClass);

    window.location.hash = `${event.target.innerHTML}`;
});

window.addEventListener("scroll", scrollActive)

function scrollActive() {
    let headerHeight = document.querySelector('.header').offsetHeight;

    let menuItems = headerNavbar.querySelectorAll('.item');
    console.log(menuItems)


    let servicesTop = document.querySelector('#services').offsetTop - headerHeight;
    let portfolioTop = document.querySelector('#portfolio').offsetTop - headerHeight;
    console.log(portfolioTop)
    let aboutTop = document.querySelector('#about').offsetTop - headerHeight;
    console.log(aboutTop)
    let contactTop = document.querySelector('#contact').offsetTop - headerHeight;
    console.log(contactTop)
    let position = window.scrollY;
    console.log(position)

    if (position < servicesTop) {
        menuItems.forEach(element => element.classList.remove('active'));
        document.getElementById('home-item').classList.add('active');
    };

    if (position >= servicesTop && position < portfolioTop) {
        menuItems.forEach(element => element.classList.remove('active'));
        document.getElementById('services-item').classList.add('active');
    };

    if (position >= portfolioTop && position < aboutTop) {
        menuItems.forEach(element => element.classList.remove('active'));
        document.getElementById('portfolio-item').classList.add('active');
    };

    if (position >= aboutTop && position < contactTop) {
        menuItems.forEach(element => element.classList.remove('active'));
        document.getElementById('about-item').classList.add('active');
    };

    if (position >= contactTop ||
        document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight ||
        position > document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        menuItems.forEach(element => element.classList.remove('active'));
        document.getElementById('contact-item').classList.add('active');
    };
}







/*... SLIDER ...*/
const colorOfTheSecondSlide = '#648BF0';
const colorOfTheSecondSlideBorder = '#4a7af3';
const colorOfTheFirstSlide = '#f16c65';
const colorOfTheFirstSlideBorder = '#ea676c';

const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');


/* turn off/on phones */

const verticalBlock = document.querySelector('.phone-container.vertical');
const horizontalBlock = document.querySelector('.phone-container.horizontal');

const verticalPhoneOn = document.querySelector('.phone-vertical');
const verticalPhoneOff = document.querySelector('.vertical-off');

const horizontalPhoneOn = document.querySelector('.phone-horizontal');
const horizontalPhoneOff = document.querySelector('.horizontal-off');


verticalBlock.addEventListener('click', function(event) {
    if (event.target.tagName !== 'IMG') return;
    addActiveClass(event.target, 'hidden');
});


const turnHorisontalPhone = () => {
    horizontalPhoneOn.addEventListener('click', () => {
        horizontalPhoneOn.classList.add('hidden');
        horizontalPhoneOff.classList.remove('hidden');
    });

    horizontalPhoneOff.addEventListener('click', () => {
        horizontalPhoneOff.classList.add('hidden');
        horizontalPhoneOn.classList.remove('hidden');
    });
}

turnHorisontalPhone();


/* slider actions */

let slides = document.querySelectorAll('.slider .slide');
let current = 0;
console.log(slides[current]);

const slider = (animationIn, animationOut) => {
    for (let i = 0; i < slides.length; i++) {

        slides[i].classList.add(animationOut);
        slides[i].classList.remove(animationIn);
    }

    slides[current].classList.remove(animationOut);
    slides[current].classList.add(animationIn);
    slides[current].classList.remove('opacity0');
}

const changeBGColor = () => {
    if (slides[current].getAttribute('class').indexOf('second') !== -1) {
        document.querySelector('.slider-part').style.backgroundColor = '#648bf0';
        document.querySelector('.slider-part').style.borderBottomColor = '#4e7cf0';
        document.querySelector('.slider-part.container').style.borderBottomColor = '#4e7cf0';

    } else {
        document.querySelector('.slider-part').style.backgroundColor = '#f16c65';
        document.querySelector('.slider-part').style.borderBottomColor = '#ea676c';
        document.querySelector('.slider-part.container').style.borderBottomColor = '#ea676c';
    }

}

slider();

document.querySelector('.arrow.left').addEventListener('click', () => {
    if (current - 1 === -1) {
        current = slides.length - 1;
    } else {
        current--;

    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('fadeInLeft');
        slides[i].classList.remove('fadeOutRight');
    }
    slider('fadeInRight', 'fadeOutLeft');
    changeBGColor();

});



document.querySelector('.arrow.right').addEventListener('click', () => {
    if (current + 1 === slides.length) {
        current = 0;
    } else {
        current++;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('fadeInRight');
        slides[i].classList.remove('fadeOutLeft');
    }
    slider('fadeInLeft', 'fadeOutRight');
    changeBGColor();
});


/*... PORTFOLIO ...*/

const showExamplesInRandomWay = () => {
    images = shuffle(images);
    console.log(images);
    insertImagesToExamples(images);
};

/* Highlight current tab */

const portfolioNavbar = document.querySelector('.categories-list');
const portfolioNavbarClass = 'active-tab';

portfolioNavbar.addEventListener('click', function(event) {
    if (event.target.tagName !== 'LI') return;
    addActiveClass(event.target, portfolioNavbarClass);
    showExamplesInRandomWay();

});

/* Highlight current example */

const examplesList = document.querySelector('.examples-list');
const portfolioExampleClass = 'active-example';

examplesList.addEventListener('click', function(event) {
    let li = event.target.closest('li');
    if (!li) return;
    addActiveClass(li, portfolioExampleClass);
});

/*... GET A QUOTE ...*/

const generateSubmitModal = () => {
    const nameInput = document.querySelector('.form-line.name');
    const emailInput = document.querySelector('.form-line.email');
    const topicInput = document.querySelector('.topic');
    const descriptionInput = document.querySelector('.description-input');
    const topic = document.querySelector('.modal-topic');
    const description = document.querySelector('.modal-description');

    document.querySelector('.overlay').classList.remove('hidden');

    if (nameInput.value.length === 0 && emailInput.value.length === 0) {
        alert('Заполните обязательные поля!');
    } else {

        if (topicInput.value.length !== 0 && descriptionInput.value.length !== 0) {
            topic.innerHTML = `Тема: ${topicInput.value}`;
            description.innerHTML = `Описание: ${descriptionInput.value}`;
        }
        if (topicInput.value.length === 0 && descriptionInput.value.length === 0) {
            topic.innerHTML = 'Без темы';
            description.innerHTML = 'Без описания';
        }
        if (topicInput.value.length !== 0 && descriptionInput.value.length === 0) {
            topic.innerHTML = `Тема: ${topicInput.value}`;
            description.innerHTML = 'Без описания';

        }
        if (topicInput.value.length === 0 && descriptionInput.value.length !== 0) {
            topic.innerHTML = 'Без темы';
            description.innerHTML = `Описание: ${descriptionInput.value}`;
        }
    }
}

const submitClickHandler = () => {
    document.querySelector('.submit-button-container .submit-button ').addEventListener('click', () => {
        if (document.querySelector('.contact-form').checkValidity()) {
            generateSubmitModal();
        }

    });
}

submitClickHandler();


const closeModalClickHandler = () => {

    document.querySelector('.modal--close-button').addEventListener('click', () => {
        document.querySelector('.overlay').classList.add("hidden");
        document.querySelector('.contact-form').reset();
    });
}

closeModalClickHandler();