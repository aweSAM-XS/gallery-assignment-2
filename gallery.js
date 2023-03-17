/* Selecting the elements from the HTML file. */
const figure = document.querySelector('#featured');
const caption = document.querySelector('#gallery figure figcaption');
const ul = document.querySelector('ul');
const pink = document.querySelector('li')

//An array of <img/> elements to be rendered
const thumbnailList = []; 
const thumbnails = [
    {
        thumb: 'flowers-pink-small.jpg',
        full: 'flowers-pink-large.jpg',
        caption: 'Pink Flowers',
    },
    {
        thumb: 'flowers-purple-small.jpg',
        full: 'flowers-purple-large.jpg',
        caption: 'Purple Flowers',
    },
    {
        thumb: 'flowers-red-small.jpg',
        full: 'flowers-red-large.jpg',
        caption: 'Red Flowers',
    },
    {
        thumb: 'flowers-white-small.jpg',
        full: 'flowers-white-large.jpg',
        caption: 'White Flowers',
    },
    {
        thumb: 'flowers-yellow-small.jpg',
        full: 'flowers-yellow-large.jpg',
        caption: 'Yellow Flowers',
    },
];

const generateThumbnails = (thumbails) => {
    thumbnails.forEach((thumbnail) => {
        const thumbnailImage = `<img src="${thumbnail.thumb}" alt="${thumbnail.caption}" class="thumbnail-img"/>`;
        thumbnailList.push(thumbnailImage);
    });

    const thumbnailElements = thumbnailList.map((thumbnailImage, i) => {
        const thumbnailElement = document.createElement('li');
        thumbnailElement.innerHTML = thumbnailImage;
        thumbnailImage.includes('pink') ? thumbnailElement.classList.add('active') : null;
        thumbnailElement.addEventListener('click', () => {
            figure.src = `${thumbnails[i].full}`;
            figure.alt = thumbnails[i].caption;
            caption.textContent = thumbnails[i].caption;
            caption.style.backgroundColor = thumbnails[i].caption.replace(' Flowers', '');

            thumbnailElements.forEach((element) => {
                element.classList.remove('active');
            });
            thumbnailElement.classList.add('active');
        });
        return thumbnailElement;
    });
    ul.append(...thumbnailElements);
};

generateThumbnails(thumbnails);
