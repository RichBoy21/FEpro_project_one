import {
  header_cards,
  main_cards_under,
  our_contacts,
} from "./scripts/utils.js";
import { create_elements, contents, show_cards } from "./scripts/functions.js";
console.log(create_elements);
const show_bill = document.querySelector(".cards_wrapper");

show_cards(header_cards);

function card_generate(array) {}

/* <!-- -------------------------------------------------------- MAIN --> */

const project_images = document.querySelector(".images_items");
const projects_content = document.querySelector(".projects_content_images");

contents();

const box_container = document.querySelector(".cards_box");

for (let i = 0; i < 3; i++) {
  const box_cards = document.createElement("div");
  box_cards.className = "cards_item";
  box_container.append(box_cards);

  const images_of_cards = document.createElement("img");
  images_of_cards.src = "./assets/main_images/1.png";

  const paragraph = document.createElement("p");
  paragraph.textContent = "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ";

  box_cards.append(images_of_cards, paragraph);
}

const box_container_under = document.querySelector(".cards_box_under");

for (let elem in main_cards_under) {
  const main_cards = main_cards_under[elem];
  createCard(main_cards);
}
function createCard(card) {
  const card_div = document.createElement("div");
  const card_image = document.createElement("img");
  const card_text = document.createElement("p");

  if (card.img) {
    card_image.src = card.img;
    card_div.appendChild(card_image);
  }

  if (card.p) {
    card_text.innerText = card.p;
    card_div.appendChild(card_text);
  }

  card_div.className = "main-card";
  box_container_under.appendChild(card_div);
}

// <!-- -------------------------------------------------------- FOOTER -->

const contacts_elements = document.querySelector(".contacts_items");

create_elements(our_contacts);
export { show_bill };
