const music = new Audio('audio/1.mp3');
// music.play();


const songs = [
    {
        id: 1,
        songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
        poster: "image/1.jpeg",
    },
    {
        id: 2,
        songName: 'Maan Meri Jaan <br><div class="subtitle">Mohammad Faiz</div>',
        poster: "image/2.jpeg",
    },
    {
        id: 3,
        songName: 'Dekhha Tenu <br><div class="subtitle">Janhvi Kapoor</div>',
        poster: "image/3.jpeg",
    },
    {
        id: 4,
        songName: 'Teri Baaton Mein <br><div class="subtitle">Shahid Kapoor</div>',
        poster: "image/4.jpeg",
    },
    {
        id: 5,
        songName: 'Sajni <br><div class="subtitle">Arijit Singh</div>',
        poster: "image/5.jpeg",
    },
    {
        id: 6,
        songName: 'Akhiyaan Gulaab <br><div class="subtitle">Kriti Sanon</div>',
        poster: "image/6.jpeg",
    },
    {
        id: 7,
        songName: 'Yimmy Yimmy <br><div class="subtitle">Shreya Ghoshal</div>',
        poster: "image/7.jpeg",
    },
    {
        id: 8,
        songName: 'Besharam Rang <br><div class="subtitle">Shah Rukh Khan</div>',
        poster: "image/8.jpeg",
    },
    {
        id: 9,
        songName: 'Humnava Mere <br><div class="subtitle">Jubin Nautiyal</div>',
        poster: "image/9.jpeg",
    },
    {
        id: 10,
        songName: 'Zihaal e Miskin <br><div class="subtitle">Vishal Mishra</div>',
        poster: "image/10.jpeg",
    },
    {
        id: 11,
        songName: 'HAY MERA DIL <br><div class="subtitle">YO YO HONEY SINGH</div>',
        poster: "image/11.jpeg",
    },
    {
        id: 12,
        songName: 'Do You Know <br><div class="subtitle">Diljit Dosanjh</div>',
        poster: "image/12.jpeg",
    },
    {
        id: 13,
        songName: 'Ban Ja Rani <br><div class="subtitle">Guru Randhawa</div>',
        poster: "image/13.jpeg",
    },
    {
        id: 14,
        songName: 'Why This Kolaveri Di <br><div class="subtitle">Dhanush</div>',
        poster: "image/14.jpg",
    },
    {
        id: 15,
        songName: 'Kale Je Libaas <br><div class="subtitle">Kaka</div>',
        poster: "image/15.jpeg",
    },
    {
        id: 16,
        songName: 'Pasoori <br><div class="subtitle">Ali Sethi</div>',
        poster: "image/16.jpeg",
    },
    {
        id: 17,
        songName: 'IKKY <br><div class="subtitle">KARAN AUJLA</div>',
        poster: "image/17.jpeg",
    },
    {
        id: 18,
        songName: 'Sajde <br><div class="subtitle">Parineeti</div>',
        poster: "image/18.jpeg",
    },
    {
        id: 19,
        songName: 'Heeriye <br><div class="subtitle">Jasleen Royal</div>',
        poster: "image/19.jpeg",
    },
    {
        id: 20,
        songName: 'Koi Sehri Babu <br><div class="subtitle">Shruti Rane</div>',
        poster: "image/20.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});


const makeAllplays = () => { 
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
         el.classList.add('bi-play-circle-fill');
         el.classList.remove('bi-pause-circle-fill');

    })
}

const makeAllBackgroung = () => { 
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.computedStyleMap.background = 'rgb(105, 105, 105, .0);'
    })
}



let index = 0;

let title = document.getElementById('title');
let poster_master_play = document.getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click' , (el)=>{
       index = el.target.id;
    //    console.log(index);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles =songs.filter((els) =>{
        return els.id == index;

    });

    songTitles .forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackgroung();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 =Math.floor(music_dur / 60);
    let sec1 =Math.floor(music_dur % 60);
    // console.log(min1);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
   currentEnd.innerText = `${min1}:${sec1}`;
   
   let min2 = Math.floor(music_curr / 60);
   let sec2 = Math.floor(music_curr % 60);
    if (sec2 > 10) {
        sec2 = `${sec2}`;
    }


   currentStart.innerText = `${min2}:${sec2}`;


   let progressBar = parseInt((music_curr / music_dur) * 100);
   seek.value = progressBar;
//    console.log(seek.value);
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;

   dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

// let.vol_icon = document.getElementById('vol_icon');
// let vol = document.getElementById('vol');
// let vol_bar = document.getElementsByClassName('vol_bar')[0];
// let vol_dot = document.getElementById('vol_dot');

// vol.addEventListener('change', () =>{
//     if (vol.value == 0) {
//         vol_icon.classList.remove('bi-volume-up-fill');
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.add('bi-volume-off-fill');
//     }
    
//     if (vol.value > 0) {
//         vol_icon.classList.remove('bi-volume-up-fill');
//         vol_icon.classList.add('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-off-fill');
        
//     }
    
//     if (vol.value > 50) { 
//         vol_icon.classList.add('bi-volume-up-fill');
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-off-fill');
        
//     }
//     let vol_a = vol.value;
//     vol_bar.style.width = `${vol_a}%`;
//     vol_dot.style.left = `${vol_a}%`;
//     music.volume = vol_a / 100;
// });









// let masterPlay = document.getElementById('masterPlay');
// // let wave = document.getElementById('wave');

// masterPlay.addEventListener('click', ()=> {
//     if(music.paused || music.currentTime <= 0){
//         music.play();
//         // wave.classList.add('active1');
//     }
//     else{
//         // music.pause();
//     }
// })


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft +=330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () =>{
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
});