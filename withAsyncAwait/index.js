'use strict';

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 1000;
const WALKING_CAT = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function setTime(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function walk(img, startPos, stopPos) {
  let catLeft = startPos;
  while (catLeft <= stopPos) {
    img.style.left = catLeft + 'px';
    catLeft += STEP_SIZE_PX;
    await setTime(STEP_INTERVAL_MS);
  }
}

async function dance(img) {
  img.src = DANCING_CAT_URL;
  await setTime(DANCE_TIME_MS);
  img.src = WALKING_CAT;
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
  }
}

window.addEventListener('load', catWalk);
