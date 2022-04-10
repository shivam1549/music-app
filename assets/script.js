console.log("Welcome to spotify");


// Pehla gana play hoga

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
//  Arra.form mutliple ko select krne ke liye class name se
let songItem = Array.from(document.getElementsByClassName('songItem'));


// array of objects and its keypair
let songs = [
    { songName: "Salam-e", filePath: "songs/1.mp3", covertPath: "covers/1.jpg" },
    { songName: "e-ishq", filePath: "songs/2.mp3", covertPath: "covers/2.jpg" },
    { songName: "Salam", filePath: "songs/3.mp3", covertPath: "covers/3.jpg" },
    { songName: "ishq", filePath: "songs/4.mp3", covertPath: "covers/4.jpg" },
    { songName: "e-ishqSalam", filePath: "songs/5.mp3", covertPath: "covers/5.jpg" },
    
    
]

songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].covertPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// Jb koi play button pe click krega tb event add hoga

masterPlay.addEventListener('click', () => {

    // check kro ki audio element paused hai mtlb gana ruka hua hai ya phir uska time 0 hai to mtlb gana ni bj rha hai
    // ye check hoga if else se
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    // agr audio chl rhi hai to rok do use
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
   
})

// audio element ke liye chla hai timeupdate event

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // parse int value integer me return krega
    // audioElement.currentTime mtlb gana kitna bj chuka hai vo time
    // audioElement.duration mtlb total gana ki duration kya hai

    // kitna percentage gana bj chuka hai vo yha se milega = (audioElement.currentTime/audioElement.duration)*100;
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

// jb slider ko move kre to gana age peeche ho uske liye

myProgressBar.addEventListener('change', () => {
    // myProgressBar.value ye value percentage me dega isko durationme convert krna hoga 
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        // e.target mtlb kis element pe click hua hai ye btaega 
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        // console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
       
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play(); 
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0;
    }
    else {
        songIndex += 1; 
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play(); 
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1; 
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play(); 
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})