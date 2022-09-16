const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames  and alt text for each image*/

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images, and for each one, insert an image element inside thumb-bar div that embeds that image in the page along with its alt text */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);

/* Event listener for each image so when clicked, the corresponding image and alt text are displayed in the displayed-img element */
/* Find the value of the src attribute of the current image. Set the src attribute value of the displayed-img <img> to the src value passed in as a parameter. Then do the same for the alt attribute. */
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class'); /* Checks the current class name set on the <button>*/
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
