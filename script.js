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

const main_cards_under = [
  {
    p: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/main_images/1.png",
    p: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/main_images/1.png",
    p: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/main_images/1.png",
    p: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/main_images/1.png",
    p: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
  {
    img: "./assets/main_images/1.png",
    p: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
  },
];
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

const our_contacts = [
  {
    img: "./assets/main_images/place.png",
    title: "АДРЕС:",
    content: "УЛИЦА МИРА 140, ОФИС 140-142",
  },
  {
    img: "./assets/main_images/phone.png",
    title: "ТЕЛЕФОН:",
    content: "8 (812) 111-22-33 8 (812) 111-22-33",
  },
  {
    img: "./assets/main_images/time.png",
    title: "ВРЕМЯ РАБОТЫ:",
    content: "ПН-СБ  10:00 - 20:00",
  },
  {
    img: "./assets/main_images/email.png",
    title: "E-MAIL:",
    content: "INFO@VIP.RU",
    color: "#F7654A",
    id: "email",
  },
];
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
create_elements(our_contacts);
