'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

async function walk(img, startPos, stopPos) {
  let catLeft = startPos;
  const interval = setInterval(() => {
    while (catLeft <= stopPos) {
      img.style.left = catLeft + 'px';
      catLeft += STEP_SIZE_PX;
    }
  }, STEP_INTERVAL_MS);
}

async function dance(img) {
  img.src = DANCING_CAT_URL;
  setTimeout(() => {
    img.src = WALKING_CAT;
    resolve('true');
  }, DANCE_TIME_MS);
}

async function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  // Use async/await syntax to loop the walk and dance functions
  // walk(img, startPos, centerPos).then(()=>dance(img)).then(()=> walk(img, centerPos, stopPos)).then(()=>catWalk());
  while (true) {
    await walk(img, startPos, centerPos);
    await dance(img);
    await walk(img, centerPos, stopPos);
    catWalk();
  }
}

window.addEventListener('load', catWalk);
