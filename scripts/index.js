const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

const profileName = document.querySelector(".profile__name");
const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescription = document.querySelector(".profile__description");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", function () {
  openModal(editProfileModal);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

editProfileModal.addEventListener("submit", function (event) {
  event.preventDefault();
  closeModal(editProfileModal);
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
});

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

const cardImage = document.querySelector(".card__image");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardTitle = document.querySelector(".card__title");
const cardTitleInput = newPostModal.querySelector("#card-caption-input");

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
  //cardImageInput.value = cardImage.textContent;
  //cardTitleInput.value = cardTitle.textContent;
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

newPostModal.addEventListener("submit", function (event) {
  event.preventDefault();
  closeModal(newPostModal);
  console.log((cardImage.textContent = cardImageInput.value));
  console.log((cardTitle.textContent = cardTitleInput.value));
});

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
