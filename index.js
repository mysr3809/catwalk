'use strict'


const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const WALKING_CAT = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    // Resolve this promise when the cat (`img`) has walked from `startPos` to
    // `stopPos`.
    img.style.left= '0px';
    
    setInterval(() => {
      if (parseInt(img.style.left)+(img.width/2) < stopPos) {
        let sum=parseInt(img.style.left)+ STEP_SIZE_PX;
        img.style.left = `${sum}px` ;
      } else{
        clearInterval();
      }
    }, STEP_INTERVAL_MS);
    // Make good use of the `STEP_INTERVAL_PX` and `STEP_INTERVAL_MS`
    // constants.
    resolve('true');
  });
}

function dance(img) {
  return new Promise((resolve) => {
    // Switch the `.src` of the `img` from the walking cat to the dancing cat
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = WALKING_CAT;
      // walk(img, centerPos, stopPos);
    }, DANCE_TIME_MS);
    // and, after a timeout, reset the `img` back to the walking cat. Then
    // resolve the promise.
    resolve('true');
    // Make good use of the `DANCING_CAT_URL` and `DANCE_TIME_MS` constants.
  });
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;
  

  // Use the `walk()` and `dance()` functions to let the cat do the following:
  // 1. Walk from `startPos` to `centerPos`.
  walk(img, startPos, centerPos);
  // 2. Then dance for 5 secs.
  dance(img);
  // 3. Then walk from `centerPos` to `stopPos`.
  walk(img, centerPos, stopPos);
  // 4. Repeat the first three steps indefinitely.
}

window.addEventListener('load', catWalk);