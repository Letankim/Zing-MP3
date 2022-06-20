// // khai báo biến 
// var wrapperMusic = document.querySelector('.music-infor-list');
// var itemMusic = document.querySelector('.music-infor-item');
// var listMusic = [
//     {
//         name: "Havana",
//         singer: "Camila Cabello",
//         source: "./audio/save.mp3",
//         image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg"
//     },
//     {
//         name: "Havana1",
//         singer: "Camila Cabello",
//         source: "./audio/save.mp3",
//         image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg"
//     },
//     {
//         name: "Havana2",
//         singer: "Camila Cabello",
//         source: "./audio/save.mp3",
//         image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg"
//     },
//     {
//         name: "Havana3",
//         singer: "Camila Cabello",
//         source: "./audio/save.mp3",
//         image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg"
//     },
//     {
//         name: "Havana4",
//         singer: "Camila Cabello",
//         source: "./audio/save.mp3",
//         image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg"
//     },
//     {
//         name: "Havana5",
//         singer: "Camila Cabello",
//         source: "./audio/save.mp3",
//         image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg"
//     },
//     {
//         name: "Havana6",
//         singer: "Camila Cabello",
//         source: "./audio/save.mp3",
//         image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg"
//     }
// ];

// function renderMusic(listMusic) {
//     var renderwrapMusic = listMusic.map(function(music) {
//         return `<li class="music-infor-item row">
//                     <div class="infor-item-small-img col l-6">
//                         <div class="small-img"> 
//                             <img src="${music.image}" alt="">
//                             <span class="small-pause"> 
//                                 <i class="fas fa-play container_profile_icon"></i 
//                             </span>
//                         </div>
//                         <div class="singer-music">
//                             <span class="music-name">${music.name}</span> 
//                             <span class="singer-name"> 
//                                 <a href="">${music.singer}</a>
//                                 <a href=""></a> 
//                                 <a href=""></a> 
//                             </span> 
//                         </div> 
//                     </div> 
//                     <div class="infor-item-time col l-2"> 
//                         <span class="infor-item-time-details">4:44</span> 
//                     </div> 
//                     <div class="infor-item-react col l-4"> 
//                         <ul class="list-react"> 
//                             <li class="react-item"> 
//                                 <i class="fas fa-microphone "></i> 
//                             </li> 
//                             <li class="react-item"> 
//                                 <i class="fas fa-heart" onclick = "handleReact(this)"></i> 
//                             </li> 
//                             <li class="react-item"> 
//                                 <i class="fas fa-ellipsis-h"></i> 
//                             </li> 
//                         </ul> 
//                     </div> 
//                 </li>`
//     });
//     wrapperMusic.innerHTML = renderwrapMusic.join('');
// }
// renderMusic(listMusic);

// // var test = document.querySelector(".test");
// // var audio = document.createElement("audio");
// // test.appendChild(audio);
// // audio.src = listMusic[0].source;
// // function autoAudio(audio) {
// //     // audio.play();
// // }
// // autoAudio(audio);