let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.toei-anim.co.jp/tv/dejimon/chara/charactar/koromon.jpg",
"https://digimon.net/cimages/digimon/agumon.jpg",
"https://digimon.net/cimages/digimon/greymon-first.jpg",
"https://digimon.net/cimages/digimon/metalgreymon_alter.jpg",
"https://lh3.googleusercontent.com/proxy/Fyox7PFIkVyPexO4zGqWZro8hHQisUc2IJqEoM8_rUwUv95mDUxIWI61BkBfYVE_M2EWkJ6_Ao1U7oqtpWrBiUPYGnRsEPOtpztZ_XgHYoaPirm82Lab",
"https://digimon.net/cimages/digimon/agumon_kizuna.jpg",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();

  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.btn-square:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
