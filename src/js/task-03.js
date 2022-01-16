const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
// ***************variant - 1***************************************
// const imagesList = document.querySelector('.gallery')
// imagesList.classList.add('task-03__imgList')

// const makeImages = elements => {
//     return elements.map(element => {
//         const itemEl = document.createElement(`li`)
//         const imgEl = document.createElement(`img`)
//         itemEl.appendChild(imgEl)
//         imgEl.setAttribute('src', element.url)
//         imgEl.setAttribute('alt', element.alt)
//         imgEl.classList.add('task-03__img')
//         return itemEl
//     })
// }
// const itemsArray = makeImages(images)
// imagesList.append(...itemsArray)
// ******************variant - 2************************************
const imagesList = document.querySelector(".gallery");
imagesList.classList.add('task-03__imgList')

const makeImages = images.map(({ url, alt }) => {
    return `<li class="gallery-list">
        <img
          src="${url}" 
          alt="${alt}" 
          class="task-03__img"
        />
      </li>`;
}).join("");
imagesList.insertAdjacentHTML("beforeend", makeImages);