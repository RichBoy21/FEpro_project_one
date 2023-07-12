const show_bill = document.querySelector(".cards_wrapper");

const header_cards = [
  {
    number: 26,
    age: "лет",
    p: "на рынке",
  },
  {
    number: 26,
    age: "лет",
    p: "на рынке",
  },
  {
    number: 26,
    age: "лет",
    p: "на рынке",
  },
  {
    number: 26,
    age: "лет",
    p: "на рынке",
  },
];
function show_cards(array) {
  for (let i = 0; i < array.length; i++) {
    const items_cards = array[i];

    const cards_box = document.createElement("div");
    cards_box.className = "header_cards_box";
    show_bill.append(cards_box);

    const cards_titles = document.createElement("h3");
    cards_titles.className = "header_cards_titles";
    cards_titles.textContent = items_cards.number;

    const cards_elements = document.createElement("p");
    cards_elements.className = "header_cards_elements";
    cards_elements.innerText = items_cards.age;

    const cards_text = document.createElement("p");
    cards_text.className = "header_cards_text";
    cards_text.innerText = items_cards.p;

    cards_box.append(cards_titles, cards_elements, cards_text);
  }
}
show_cards(header_cards);

function card_generate(array) {}

/* <!-- -------------------------------------------------------- MAIN --> */

const project_images = document.querySelector(".images_items");
const projects_content = document.querySelector(".projects_content_images");

function contents() {
  for (let i = 0; i < 3; i++) {
    const box_content = document.createElement("div");
    box_content.className = "box_container";
    projects_content.append(box_content);

    const img_content = document.createElement("img");
    img_content.src = "./assets/main_images/content_img1.png";

    const title_content = document.createElement("h3");
    title_content.innerText = "Арена";

    const text_content = document.createElement("p");
    text_content.innerText =
      "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.";

    box_content.append(img_content, title_content, text_content);
  }
}
contents();
