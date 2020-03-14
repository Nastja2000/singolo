/* General staff*/

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

/*... SLIDER ...*/
const colorOfTheSecondSlide = '#648BF0';
const colorOfTheSecondSlideBorder = '#4a7af3';
const colorOfTheFirstSlide = '#f16c65';
const colorOfTheFirstSlideBorder = '#ea676c';

const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

console.log(document.querySelector('.slider-part'));

const slideImages = (turn) => {
    let mainSliderBlock = document.querySelector('.slider-part');
    let currentSlide = document.querySelector('.slide.current');
    let hiddenSlide = document.querySelector('.slide.hiddn');
    let temp = 0;
    let currentBGColor, currentBorderColor;
    if (currentSlide.classList.contains('first')) {
        currentBGColor = colorOfTheSecondSlide;
        currentBorderColor = colorOfTheSecondSlideBorder;
    } else {
        currentBGColor = colorOfTheFirstSlide;
        currentBorderColor = colorOfTheFirstSlideBorder;
    }

    if (turn === true) {
        currentSlide.classList.add('fadeOutLeft');
        hiddenSlide.classList.add('fadeInRight');
    } else {
        currentSlide.classList.add('fadeOutRight');
        hiddenSlide.classList.add('fadeInLeft');
    }

    mainSliderBlock.style.backgroundColor = currentBGColor;
    mainSliderBlock.style.borderBottomColor = currentBorderColor;

    swap(currentSlide, hiddenSlide);
}

/*
turn = true -> to left;
turn = false -> to right;
*/

leftArrowClickHandler = () => {
    leftArrow.addEventListener('click', () => {
        slideImages(true);
    }, false);
    leftArrow.removeEventListener('click', () => {
        slideImages(true);
    }, false);
}

leftArrowClickHandler();

rightArrowClickHandler = () => {
    rightArrow.addEventListener('click', () => {
        slideImages(false);
    }, false);
    rightArrow.removeEventListener('click', () => {
        slideImages(false);
    }, false);
}

rightArrowClickHandler();
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
    });
}

closeModalClickHandler();