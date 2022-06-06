const images = [
  './images/09931.png','./images/09932.png','./images/09933.png',
  './images/09934.png','./images/09935.png','./images/09936.png',
  './images/09937.png','./images/09938.png','./images/09939.png',
  './images/09940.png','./images/09941.png','./images/09942.png',
  './images/09943.png','./images/09944.png','./images/09945.png',
  './images/09946.png','./images/09947.png','./images/09948.png',
  './images/09949.png','./images/09950.png','./images/09951.png',
  './images/09952.png','./images/09953.png','./images/09954.png',
  './images/09955.png','./images/09956.png','./images/09957.png',
  './images/09958.png','./images/09959.png','./images/09960.png',
  './images/09961.png','./images/09962.png','./images/09963.png'
]



function insertRandomImg (){
  let img = document.querySelectorAll('img');

  // let index = Math.floor(Math.random()*10);
  // console.log(index);

  for (let i = 0; i < img.length; i++){
    const randomImg1 = images[Math.floor(Math.random() * images.length)];
    const randomImg2 = images[Math.floor(Math.random() * images.length)];
    const randomImg3 = images[Math.floor(Math.random() * images.length)];
    const randomImg4 = images[Math.floor(Math.random() * images.length)];
    const randomImg5 = images[Math.floor(Math.random() * images.length)];
    const randomImg6 = images[Math.floor(Math.random() * images.length)];

    console.log(randomImg1)
    img[0].src = randomImg1;
    img[1].src = randomImg2;
    img[2].src = randomImg3;
    img[3].src = randomImg4;
    img[4].src = randomImg5;
    img[5].src = randomImg6;
  }

  

  // img.setAttribute('src', theImg);
}

window.addEventListener('load', insertRandomImg)



