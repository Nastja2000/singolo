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
    console.log(array[0]);
    console.log(array[1]);
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array[0]);
    console.log(array[1]);
    return array;
}


const generateDomElement = (node, element, ...classes) => {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
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

/*... PORTFOLIO ...*/

const showExamplesInRandomWay = () => {
    images = shuffle(images);
    console.log(images);
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
            topic.innerHTML = 'Без темы';
            description.innerHTML = `Описание: ${descriptionInput.value}`;
        }
        if (topicInput.value.length === 0 && descriptionInput.value.length !== 0) {
            topic.innerHTML = `Тема: ${topicInput.value}`;
            description.innerHTML = 'Без описания';
        }
    }
}

const submitClickHandler = () => {
    document.querySelector('.submit-button-container .submit-button ').addEventListener('click', () => {
        generateSubmitModal();
    });
}

submitClickHandler();


const closeModalClickHandler = () => {

    document.querySelector('.modal--close-button').addEventListener('click', () => {
        document.querySelector('.overlay').classList.add("hidden");
    });
}

closeModalClickHandler();