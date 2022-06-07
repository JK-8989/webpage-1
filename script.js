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
  './images/09961.png','./images/09962.png','./images/09963.png',

  './images/09964.png','./images/09965.png','./images/09966.png',
  './images/09967.png','./images/09968.png','./images/09969.png',
  './images/09970.png','./images/09971.png','./images/09972.png',
  './images/09973.png','./images/09974.png','./images/09975.png',
  './images/09976.png','./images/09977.png','./images/09978.png',
  './images/09979.png','./images/09980.png','./images/09981.png',
  './images/09982.png','./images/09983.png','./images/09984.png',
  './images/09985.png','./images/09986.png','./images/09987.png'
]
let num = Math.floor(Math.random() * images.length);
console.log(num);

function insertRandomImg (){
  let img = document.querySelectorAll('img');

  for (let i = 0; i < img.length; i++){
    
    let randomImg = images[Math.floor(Math.random() * images.length)];
    img[i].src = randomImg;
    console.log(randomImg)
  }
}
window.addEventListener('load', insertRandomImg)

// let array = [];
// let element = num;

// function  add_element_to_array(){
  
//   for (let x = 0; x < images.length; x++) {
//       array.push(element);
//       console.log(array[x]);
//       // return
//   }
  
  
// }
// add_element_to_array();
//----------------------------------

// var nums = [1,2,3,4,5,6,7,8,9,10],
//     ranNums = [],
//     i = nums.length,
//     j = 0;

// while (i--) {
//     j = Math.floor(Math.random() * (i+1));
//     ranNums.push(nums[j]);
//     nums.splice(j,1);
// }
// ranNums.next().value; 
//To use afterwards (for each time that the numbers are used)



