const imgItme = [
  './img/main_visual_111-0x0.jpg',
  './img/main_visual_13-0x0.jpg',
  './img/main_visual_2-0x0.jpg',
  './img/main_visual_6-0x0.jpg',
  './img/main_visual_7-0x0.jpg',
]
const img = document.getElementById('img');
// img.src = imgItme[0];

let count = 0;
let Timer = 0;
const Id = setInterval(() => {
  img.src = imgItme[count];
  count ++;
  console.log(count);
  if(count >= imgItme.length - 1){
    count = 0;
  }
}, 5000);
