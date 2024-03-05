console.log("Welcome to Dill");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
  {
    songName: "Dulhan Banami",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Chery Chery Lady",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Hanji Hanji",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  { songName: "Judai", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  {
    songName: "Kabhi jo Badal",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Phir Milenge",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Phir Mohabbat",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Yadon",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
  songName: "Dard Karaara Dum Laga Ke Haisha",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Tere Bina Jena saza Ho Gaya",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Piya Aaya Na",
    filePath: "songs/11.mp3",
    coverPath: "covers/11.jpg",
  },{
    songName: "Chaleya",
    filePath: "songs/12.mp3",
    coverPath: "covers/12.jpg",
  },
  {
    songName: "Maula Mere Maula",
    filePath: "songs/13.mp3",
    coverPath: "covers/13.jpg",
  }
]
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
    gif.style.opacity = 1;
    document.getElementsByClassName("songInfo");
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle'); 
    gif.style.opacity = 0;
    document.getElementsByClassName("songInfo");
  }
})
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  )
  myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime=myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = ()=> {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex=parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src=`songs/${songIndex+1}.mp3.mp3`;
      audioElement.currentTime=0 ;   
      audioElement.play();
      gif.style.opacity = 1;
      document.getElementsByClassName("songInfo");
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=12){
      songIndex =0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3.mp3`;
      audioElement.currentTime=0 ;   
      audioElement.play();
      gif.style.opacity = 1;
      document.getElementsByClassName("songInfo");
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0){
      songIndex =0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3.mp3`;
      audioElement.currentTime=0 ;   
      audioElement.play();
      gif.style.opacity = 1;
      document.getElementsByClassName("songInfo");
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})
       