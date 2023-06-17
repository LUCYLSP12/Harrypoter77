const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// !function that open modal by clicking card
const showModal = () => {
  modal.classList.add("show");
  overlay.classList.add("show");
};

// !close modal function
const closeModal = () => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
};

// ! creating product modal
export const createModal = (products, data) => {
  products.forEach((product) => {
    console.log(products);
    // ! adding click to each btn
    product.addEventListener("click", () => {
      const productId = product.id;
      // !FIND ONE PRODUCT THAT WAS CHOSEN BY USER
      const { image, name, actor, house, patronus, dateOfBirth, species, gender, ancestry} = data.find(
        (el) => el.id === productId
      );
      modal.innerHTML = `
		<div class="modal__header">
        <img
          src="${image}"
          alt=""
        />
		  <button class="close-modal">&times;</button>
      </div>

      <div class="modal__body">
        <h4 class="modal__body-title">${name}</h4>
        <p class="modal__body-subtitle">${actor}</p>
        <p class="modal__body-category">
          Силы: ${house} <span>: ${patronus}</span>
          
          <img class="griff" src="${house === 'Gryffindor' ? '../img/lef-removebg-preview.png'
            : house === 'Slytherin' ? '../img/orel-removebg-preview.png'
            : house === 'Hufflepuff' ? '../img/zmeya-removebg-preview.png'
            : house === 'Ravenclaw' ? '../img/enoot-removebg-preview.png'
            : house === '' ? '../img/enoot-removebg-preview.png' :house}" alt="">
            Дата рождения: ${dateOfBirth}<br>
            Расса: ${species}<br>
            Пол: ${gender}<br>
            Родословная: ${ancestry}<br>
        </p>
        

      </div>
		`;
      // !function that open modal by clicking card
      showModal();

      const closeModalBtn = document.querySelector(".close-modal");

      closeModalBtn.addEventListener("click", closeModal);
      overlay.addEventListener("click", closeModal)
      
    });
  });
};






