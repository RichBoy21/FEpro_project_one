import { show_bill } from "../script";

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
function create_elements(obj) {
  for (let i = 0; i < obj.length; i++) {
    const elem_div = document.createElement("div");
    const elem_img = document.createElement("img");
    const elem_h4 = document.createElement("h4");
    const elem_p = document.createElement("p");

    if (obj[i].img) {
      elem_img.src = obj[i].img;
      elem_div.append(elem_img);
    }

    if (obj[i].title) {
      elem_h4.textContent = obj[i].title;
      elem_div.append(elem_h4);
    }
    if (obj[i].content) {
      elem_p.textContent = obj[i].content;
      elem_div.append(elem_p);
    }
    if (obj[i].color) {
      elem_p.style.color = obj[i].color;
    }
    if (obj[i].id) {
      elem_h4.id = obj[i].id;
    }

    elem_div.className = "footer_elements";
    contacts_elements.append(elem_div);
  }
}

export { create_elements, contents, show_cards };
