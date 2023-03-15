// Get references to the gallery elements
const featuredImg = document.querySelector('#gallery figure img');
const featuredCaption = document.querySelector('#gallery figure figcaption');
const thumbnails = document.querySelectorAll('#gallery .thumbnails li img');

// directory to fetch images
const imagesPath = '/images';

// Define an array of image data objects
const imageData = [];

fetch(imagesPath)
    .then((response) => response.text())
    .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const files = Array.from(doc.querySelectorAll('a')).map(
            (a) => a.textContent
        );
        files.splice(0, 3);
        getImages(files);
    })
    .catch((error) =>
        console.log('Error getting directory information:', error)
    );

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
};

console.log(imageData);


// Loop through the thumbnails and add click event listeners to each one
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        // Update the featured image and caption
        featuredImg.src = imageData[index].full;
        featuredImg.alt = imageData[index].caption;
        featuredCaption.textContent = imageData[index].caption;

        // Set the active thumbnail to have a border
        thumbnails.forEach((thumb) => {
            thumb.classList.remove('active');
        });
        thumb.classList.add('active');
    });
});
