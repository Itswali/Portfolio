const hamburger = document.querySelector('.bars');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.main-menu');
const cancel = document.querySelector('.cancel');
const links = document.querySelector('.menu-item');
const cardsSection = document.querySelector('.middle');
const modalsSection = document.querySelector('.modal-container');

hamburger.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}

const projectsCard = [
  {
    id: '1',
    image: 'img/mealsDB.png',
    tittle: 'MealsDb',  
    infoProject: ['CANOPY', 'Back End Dev', '2022'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/MealsDB/',
    linkSource: 'https://github.com/Itswali/MealsDB/',
  },
  {
    id: '2',
    image: 'img/todolist.png',
    tittle: 'To-DO-List',
    infoProject: ['CANOPY', 'Web Page', '2022'],
    description: 'This is a simple web app that manages the To do list. The user can add, edit , delete and clear all to do items.',
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/toDoList/dist/',
    linkSource: 'https://github.com/Itswali/toDoList',
  },

  {
    id: '3',
    image: 'img/Card.png',
    tittle: 'Card',
    infoProject: ['Front End', '2022'],
    description: 'A Card design to enter data of ATM Card Info..',
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/Card',
    linkSource: 'https://github.com/Itswali/Card',
  },

  {
    id: '4',
    image: 'img/global.png',
    tittle: 'Global-Summit',
    infoProject: ['FACEBOOK', 'Full Stack Dev', '2022'],
    description: 'This is a UN Refugee Advert page for a an annual Summit meeting held in America . The advert has featured the topics to be discussed and Speaker from allover the globe.',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/Cpastone-Project/',
    linkSource: 'https://github.com/Itswali/Cpastone-Project/',
  },

  {
    id: '5',
    image: 'img/awesomebooks.png',
    tittle: 'Awesome Books',
    infoProject: ['Books', 'Full Stack Dev', '2022'],
    description: "This is a web page for User to add and save their best book collection. with author name",
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/Awesome-Books/',
    linkSource: 'https://github.com/Itswali/Awesome-Books/',
  },

  {
    id: '6',
    image: 'img/desktop4.png',
    tittle: 'Capstone Project',
    infoProject: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkLiveVersion: 'https://itswali.github.io/Cpastone-Project/',
    linkSource: 'https://github.com/Itswali/Cpastone-Project',
  },
];

const createProjects = () => {
  projectsCard.forEach((project) => {
    const card1 = document.createElement('div');
    card1.classList.add('works');
    cardsSection.appendChild(card1);

    if (card1 % 2 === 1) {
      card1.classList.add('works-2');
    }

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('project-image');
    card1.appendChild(imgContainer);

    const imgCard = document.createElement('img');
    imgCard.classList.add('image');
    imgCard.setAttribute('src', project.image);
    imgCard.setAttribute('alt', 'my first project');
    imgContainer.appendChild(imgCard);

    const infoCard = document.createElement('div');
    infoCard.classList.add('projects');
    card1.appendChild(infoCard);

    const tittleCard = document.createElement('h2');
    tittleCard.classList.add('project-tittle');
    tittleCard.innerText = project.tittle;
    infoCard.appendChild(tittleCard);

    const clientRole = document.createElement('ul');
    clientRole.classList.add('project-info');
    infoCard.appendChild(clientRole);

    project.infoProject.splice(1, 0, 'img/Counter.png');
    project.infoProject.splice(3, 0, 'img/Counter.png');

    project.infoProject.forEach((item, index) => {
      const itemInfo = document.createElement('li');
      clientRole.appendChild(itemInfo);

      if (index === 0) {
        itemInfo.classList.add('client');
      }

      if (item === 'img/Counter.png') {
        const itemImg = document.createElement('img');
        itemImg.classList.add('imgPoint');
        itemImg.setAttribute('src', item);
        itemImg.setAttribute('alt', 'point');
        itemInfo.appendChild(itemImg);
      } else {
        itemInfo.innerText = item;
      }
    });

    const textCard = document.createElement('p');
    textCard.classList.add('primary-text');
    textCard.innerText = project.description;
    infoCard.appendChild(textCard);

    const technologyCard = document.createElement('ul');
    technologyCard.classList.add('categories');
    infoCard.appendChild(technologyCard);

    project.technologies.forEach((item, index) => {
      const technology = document.createElement('li');
      technology.innerText = item;
      technologyCard.appendChild(technology);

      if (index === 1) {
        technology.classList.add('ruby');
      }
    });

    const seeProject = document.createElement('button');
    seeProject.classList.add('button');
    seeProject.innerText = 'See Project';
    seeProject.id = project.id;
    infoCard.appendChild(seeProject);
  });
};

createProjects();

const createModal = () => {
  projectsCard.forEach((modal) => {
    const cardModal = document.createElement('div');
    cardModal.classList.add('overlay-card');
    cardModal.classList.add('hide');
    modalsSection.appendChild(cardModal);

    const modalNav = document.createElement('div');
    modalNav.classList.add('modal-nav');
    cardModal.appendChild(modalNav);

    const tittleModal = document.createElement('h2');
    tittleModal.classList.add('project-tittle', 'modal12');
    tittleModal.innerText = modal.tittle;
    modalNav.appendChild(tittleModal);

    const cancelModal = document.createElement('a');
    cancelModal.setAttribute('href', '#');
    cancelModal.classList.add('close');
    modalNav.appendChild(cancelModal);

    const cancelImg = document.createElement('img');
    cancelImg.setAttribute('src', 'img/cancel-icon.png');
    cancelImg.setAttribute('alt', 'cancel icon');
    cancelModal.appendChild(cancelImg);

    const clientRoleModal = document.createElement('ul');
    clientRoleModal.classList.add('project-info', 'modal28', 'modal12');
    cardModal.appendChild(clientRoleModal);

    modal.infoProject.forEach((item, index) => {
      const elementModal = document.createElement('li');
      clientRoleModal.appendChild(elementModal);

      if (index === 0) {
        elementModal.classList.add('client');
      }

      if (item === 'img/Counter.png') {
        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', item);
        imgItem.setAttribute('alt', 'point');
        elementModal.appendChild(imgItem);
      } else {
        elementModal.innerText = item;
      }
    });

    const imgModal = document.createElement('img');
    imgModal.classList.add('image', 'img-modal', 'modal12');
    imgModal.setAttribute('src', modal.image);
    imgModal.setAttribute('alt', 'project image');
    cardModal.appendChild(imgModal);

    const modalInfo = document.createElement('div');
    modalInfo.classList.add('modal-card-info');
    cardModal.appendChild(modalInfo);

    const textmodal = document.createElement('p');
    textmodal.classList.add('primary-text', 'modal-text', 'modal12');
    textmodal.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
    modalInfo.appendChild(textmodal);

    const technologiesModal = document.createElement('div');
    technologiesModal.classList.add('modal-tecnologies');
    modalInfo.appendChild(technologiesModal);

    const languages = document.createElement('ul');
    languages.classList.add('categories', 'categ-modal');
    technologiesModal.appendChild(languages);

    modal.technologies.push('github', 'ruby', 'Bootstraps');
    modal.technologies.splice(1, 1);

    modal.technologies.forEach((lang, index) => {
      const langModal = document.createElement('li');
      langModal.innerText = lang;
      languages.appendChild(langModal);

      if (index > 2) {
        langModal.classList.add('ruby');
      }
    });

    const imgDevider = document.createElement('img');
    imgDevider.classList.add('img-devider');
    imgDevider.setAttribute('src', 'img/devider-icon.png');
    imgDevider.setAttribute('alt', 'devider icon');
    technologiesModal.appendChild(imgDevider);

    const btnsModal = document.createElement('div');
    btnsModal.classList.add('btn-modal');
    technologiesModal.appendChild(btnsModal);

    const btnSee = document.createElement('a');
    btnSee.classList.add('button', 'btn-link');
    btnSee.setAttribute('href', modal.linkLiveVersion);
    btnSee.innerText = 'See live';
    btnsModal.appendChild(btnSee);

    const seeIcon = document.createElement('img');
    seeIcon.classList.add('icon-btn');
    seeIcon.setAttribute('src', 'img/see-live.png');
    seeIcon.setAttribute('alt', 'link liveVersion');
    btnSee.appendChild(seeIcon);

    const btnSource = document.createElement('a');
    btnSource.classList.add('button', 'btn-link');
    btnSource.setAttribute('href', modal.linkSource);
    btnSource.innerText = 'See Source';
    btnsModal.appendChild(btnSource);

    const sourceIcon = document.createElement('img');
    sourceIcon.classList.add('icon-btn');
    sourceIcon.setAttribute('src', 'img/see-source.png');
    sourceIcon.setAttribute('alt', 'link source');
    btnSource.appendChild(sourceIcon);
  });
};

createModal();

const modal = document.querySelectorAll('.overlay-card');

cardsSection.addEventListener('click', (e) => {
  if (e.target.textContent === 'See Project') {
    const { id } = e.target;
    modal[id - 1].classList.remove('hide');
    modalsSection.classList.remove('hide');
  }
});

modalsSection.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('close')) {
    modalsSection.classList.add('hide');
    e.target.parentElement.parentElement.parentElement.classList.add('hide');
  } else if (e.target.classList.contains('modal-container')) {
    modalsSection.classList.add('hide');
    modal.forEach((element) => element.classList.add('hide'));
  }
});

// const userName = document.querySelector('#name');
// const userMsg = document.querySelector('#Message');
const userEmail = document.querySelector('#email');
const errorMsg = document.querySelector('.msg');
const emailRegex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
const form = document.querySelector('.the_form');

form.addEventListener('submit', (e) => {
  if (emailRegex.test(userEmail.value)) {
    errorMsg.textContent = '';
    errorMsg.textContent = 'Submitted Sucessfully';
  } else {
    e.preventDefault();
    errorMsg.textContent = 'Please use lowercase for a valid email address.';
  }
});

const formLocal = document.querySelector('#form');

formLocal.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    fullname: document.querySelector('#name').value,
    emailAdress: document.querySelector('#email').value,
    message: document.querySelector('#Message').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

const getData = localStorage.getItem('DATA');
const getDataValue = JSON.parse(getData);

window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
    document.querySelector('#name').value = getDataValue.fullname;
    document.querySelector('#email').value = getDataValue.emailAdress;
    document.querySelector('#Message').value = getDataValue.message;
  }
});
