import { createModal } from "./modal.js";

export const createCards = (data, div) => {
  div.innerHTML = data
    .map(
      ({ id, image, name, house, }) =>
        `
	  <article id="${id}" class="card" >
		 <div class="card__header">
			<img
			  src="${image}"
			  alt="${name}"
			/>
		 </div>
		 <div class="card__body">
			<h4 class="card__body-title">${name}</h4>
			<p class="card__body-subtitle"><img src="${house === 'Gryffindor' ? '../img/lef-removebg-preview.png'
            : house === 'Slytherin' ? '../img/orel-removebg-preview.png'
            : house === 'Hufflepuff' ? '../img/zmeya-removebg-preview.png'
            : house === 'Ravenclaw' ? '../img/enoot-removebg-preview.png'
            : house === '' ? '../img/enoot-removebg-preview.png' :house}" alt=""></p>

		 </div>
	  </article>
	  `
    )
    .join("");

  const products = document.querySelectorAll(".card");
  createModal(products, data);
};
	

const searchBtn = document.querySelector(".searchBar button");
export const searchInputValue = document.querySelector(".searchBar input");

export const search = (data, div)=>{
	console.log('test');
	  searchInputValue.addEventListener("input", () => {
		const text = searchInputValue.value;
		
		const searchedData = data.filter((item) =>
		  item.name.toLowerCase().includes(text.toLowerCase())
		);
		
		createCards(searchedData, div);
		});
	}