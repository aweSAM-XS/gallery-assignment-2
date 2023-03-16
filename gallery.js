// Get references to the gallery elements
const featuredImg = document.querySelector('#gallery figure img');
const featuredCaption = document.querySelector('#gallery figure figcaption');
const thumbnailContainer = document.getElementById('thumbnails');
const heading = document.querySelector('#heading')
const gallery = document.getElementById('gallery')
const caption = document.getElementById('caption')

// directory to fetch images
// const imagesPath = '/images';

// Define an array of image data objects
const imageData = [];

const thumbnailItems = [];

// fetch(imagesPath)
//     .then((response) => response.text())
//     .then((html) => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         const files = Array.from(doc.querySelectorAll('a')).map(
//             (a) => a.textContent
//         );
//         files.splice(0, 3);
        // getImages(files);
//     })
//     .catch((error) =>
//         console.log('Error getting directory information:', error)
//     );

const files = [
    "flowers-pink-large.jpg22707219/03/2018 21:33:32",
    "flowers-pink-small.jpg1558119/03/2018 22:21:36",
    "flowers-purple-large.jpg30855219/03/2018 21:32:19",
    "flowers-purple-small.jpg1480719/03/2018 22:22:06",
    "flowers-red-large.jpg26903819/03/2018 21:34:35",
    "flowers-red-small.jpg1250119/03/2018 22:22:59",
    "flowers-white-large.jpg19313119/03/2018 21:34:11",
    "flowers-white-small.jpg1261619/03/2018 22:22:32",
    "flowers-yellow-large.jpg14183819/03/2018 21:34:53",
    "flowers-yellow-small.jpg1234719/03/2018 22:23:38"
]

const getImages = (files) => {
    const thumbnails = files.filter((file) => file.includes('small'));

    for (let i = 0; i < thumbnails.length; i++) {
        const str = thumbnails[i];
        const index = str.lastIndexOf('jpg');
        const name = str.substring(0, index + 3);
        image = {
            thumb: name,
            full: name.replace('small', 'large'),
            caption: name
                .split('-')
                .slice(0, 2)
                .reverse()
                .join(' ')
                .toUpperCase(),
        };
        imageData.push(image);
    }
    for (let i = 0; i < imageData.length; i++) {
        const image = imageData[i];
        const thumbnailItem = `<img src="${image.thumb}" alt="${image.caption}" class="thumbnail-img"/>`;
        thumbnailItems.push(thumbnailItem);
    }
    thumbnailItems.forEach((thumb, index) => {
        const thumbnailElement = document.createElement('li');
        thumbnailElement.innerHTML = thumb;
        thumbnailElement.addEventListener('click', () => {
            // Update the featured image and caption
            featuredImg.src = `${imageData[index].full}` ;
            featuredImg.alt = imageData[index].caption;
            featuredCaption.textContent = imageData[index].caption;
            gallery.style.backgroundColor = imageData[index].caption.replace(' FLOWERS', '')
            caption.style.backgroundColor = imageData[index].caption.replace(' FLOWERS', '')

            // Add active class for styling
            thumbnailItems.forEach((thumb) => {
                thumb.classList.remove('active');
            });
            thumbnailElement.classList.add('active');
        });
        thumbnailContainer.appendChild(thumbnailElement);
    });
};

getImages(files);