var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// click render
var musicsContainer = $('.music-infor-list');
// image renderWrapMusic
var imgMain = $('.img-desc');
// place contain data rener
var wrapperMusic = $('.music-infor-list');
// area playing listMusic
var audio = $('#audio-play');
var nameSong = $('.name-music-playing');
var imgSong = $('.img-music-playing img');
var singerSong = $('.singer-music-playing');
var totalTime = $('.control-time-end');
var timeCurrent = $('.control-time-start');
var range = $('.total-time-control');
// btn play and pause
var btnControlPlay = $('.item-btn-playing');
var btnPlay = $('.item-btn-playing .fa-play-circle');
// cd thum rotate
var cdThum = $('.img-music-playing');
// btn next
var next = $('.item-player .fa-step-forward');
var prev = $('.item-player .fa-step-backward');
var btnRedo = $('.item-player .fa-redo');
var btnRandom = $('.item-player .fa-random');
var btnAutoPause = $('.item-btn-system-playing .fa-clock');
var timePauseAuto = $('.item-btn-system-playing input[type="text"]');
var volume = $('.item-btn-system-playing input[type="range"]');
var listTimeChoosePause = $$('.time-item-choose');
var setTime = $('.set-time');
// menu mobile pop-up
var imgMenuPopUp = $('.img-this-music img');
var nameSingerMenuPopUp = $('.name-this-singer');
var nameMusicMenuPopUp = $('.name-this-music');

var app = {
    isPlaying: false,
    currentIndex: 0,
    isSeek: false,
    isRandom: false,
    listMusic: [
    {
        name: "Save me",
        singer: "Deamn",
        source: "../audio/save.mp3",
        image: "https://avatar-ex-swe.nixcdn.com/song/2017/06/02/7/d/e/9/1496386230312_640.jpg",
        times: "03:04"
    },
    {
        name: "Havana",
        singer: "Camila Cabello",
        source: "../audio/havana.mp3",
        image: "https://upload.wikimedia.org/wikipedia/vi/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png",
        times: "03:34"
    },
    {
        name: "Attention",
        singer: "Charlie Puth",
        source: "../audio/attention.mp3",
        image: "https://avatar-ex-swe.nixcdn.com/song/2020/08/06/6/0/8/0/1596658151305_640.jpg",
        times: "03:28"
    },
    {
        name: "Cheap thrills",
        singer: "Sia",
        source: "../audio/cheap thrills.mp3",
        image: "http://data.chiasenhac.com/data/cover/51/50740.jpg",
        times: "03:31"
    },
    {
        name: "Despacito",
        singer: "Luis Fonsi,Daddy Yankee,Justin Bieber",
        source: "../audio/despacito.mp3",
        image: "https://sixdegreesfromdave.com/wp-content/uploads/2019/06/image1-14.jpg",
        times: "03:48"
    },
    {
        name: "Monsters",
        singer: "Nightcore,Katie Sky",
        source: "../audio/monsters.mp3",
        image: "https://i.pinimg.com/originals/cd/b5/e2/cdb5e21ef7574d7c9ed46f2daa2edecb.jpg",
        times: "03:37"
    },
    {
        name: "We don't talk any more",
        singer: "Charlie Puth; Selena Gomez",
        source: "../audio/we dont talk anymore.mp3",
        image: "https://avatar-ex-swe.nixcdn.com/song/2017/09/27/a/9/e/f/1506480482657_640.jpg",
        times: "03:37"
    },
    {
        name: "Senorita",
        singer: "Shawn Mendes; Camila Cabello",
        source: "../audio/senorita.mp3",
        image: "https://avatar-ex-swe.nixcdn.com/mv/2019/06/26/c/e/e/8/1561518743516_640.jpg",
        times: "03:11"
    },
    {
        name: "Shape of you",
        singer: "Ed Sheeran",
        source: "../audio/shape of you.mp3",
        image: "https://cdnimg.vietnamplus.vn/t660/uploaded/lepz/2022_04_06/shape_of_you.jpg.jpg",
        times: "03:53"
    },
    {
        name: "The nights",
        singer: "Avicii",
        source: "../audio/the nights.mp3",
        image: "https://i.ytimg.com/vi/CW9VozEI4uk/maxresdefault.jpg",
        times: "02:58"
    }
],
    render: function() {
        const renderWrapMusic = this.listMusic.map(function(music, index) {
            return `<li class="music-infor-item row" data-set = ${index}>
                        <div class="infor-item-small-img col l-6 s-7">
                            <div class="small-img"> 
                                <img src="${music.image}" alt="">
                                <span class="small-pause"> 
                                    <i class="fas fa-play container_profile_icon"></i 
                                </span>
                            </div>
                            <div class="singer-music">
                                <span class="music-name">${music.name}</span> 
                                <span class="singer-name"> 
                                    <a href="">${music.singer}</a>
                                    <a href=""></a> 
                                    <a href=""></a> 
                                </span> 
                            </div> 
                        </div> 
                        <div class="infor-item-time col l-2 s-1"> 
                            <span class="infor-item-time-details">${music.times}</span> 
                        </div> 
                        <div class="infor-item-react col l-4 s-4"> 
                            <ul class="list-react"> 
                                <li class="react-item hide-on-mobile"> 
                                    <i class="fas fa-microphone"></i> 
                                </li> 
                                <li class="react-item"> 
                                    <i class="fas fa-heart" onclick = "handleReact(this)"></i> 
                                </li> 
                                <li class="react-item"> 
                                    <i class="fas fa-ellipsis-h"></i> 
                                </li> 
                            </ul> 
                        </div> 
                    </li>`
    });
    wrapperMusic.innerHTML = renderWrapMusic.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, "currentSong", 
            {get: function() {
                return this.listMusic[this.currentIndex];
            }}
        );
    },
    handleEvents: function() {
        var _this = this;
        // check
        btnControlPlay.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            };
        };
        // xử lý cd thum quay và dừng
        const cd = cdThum.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000, //10s
            iterations: Infinity
        });
        // khi chưa play lần đầu app sẽ auto pause
        cd.pause();
        
        // play
        audio.onplay = function() {
            _this.isPlaying = true;
            btnPlay.classList.replace("fa-play-circle", "fa-pause-circle");
            // when video is playing the cd will be active
            cd.play();
            // btnPause.classList.add('active');
        };
        // pause
        audio.onpause = function() {
            _this.isPlaying = false;
            btnPlay.classList.replace("fa-pause-circle", "fa-play-circle");
            // when video stoped the cd won't be active
            cd.pause();
        };
        // when song's time is change
        audio.ontimeupdate = function() {
            timeCurrent.textContent = _this.formatSecondsAsTime(audio.currentTime);
            range.value = audio.currentTime / audio.duration *100;
            if(!isNaN(audio.duration)) {
                totalTime.textContent = _this.formatSecondsAsTime(audio.duration).toString();
            } else {
                totalTime.textContent = '....';
            };
            // // kiểm tra xem element redo đã active chưa nếu có currentIndex ko thay đổi
            if(btnRandom.classList.contains("active")) {
                if(audio.currentTime === audio.duration) {
                    _this.currentIndex = Math.floor(Math.random() * _this.listMusic.length);
                    _this.isRandom = true;
                    _this.loadCurrentSong();
                    _this.appActive();
                    audio.play();
                };
            };
            if(btnRedo.classList.contains("active") && _this.isRandom  == false) {
                if(audio.currentTime === audio.duration) {
                    _this.currentIndex = _this.currentIndex;
                    _this.loadCurrentSong();
                    audio.play();
                };
                //nếu không có active gọi next;
            } else {
                if(audio.currentTime === audio.duration && _this.isRandom  == false) {
                    _this.nextSong();
                    _this.loadCurrentSong();
                    audio.play();
                };
            };
        };
        // seeking
        range.onchange = function(e) {
            var valueSeek = (e.target.value);
            var timeSeek = valueSeek / 100 * (audio.duration);
            audio.currentTime = timeSeek;
            audio.play();
        };
        // next to music
        next.onclick = function() {
            _this.nextSong();
            audio.play();
        };
        // prev to music
        prev.onclick = function() {
            _this.prevSong();
            audio.play();
        };
        // redo music
        btnRedo.onclick = function() {
            this.classList.toggle("active");
        };
        // random playing music
        btnRandom.onclick = function() {
            this.classList.toggle("active");
        };
        // auto pause
        [...listTimeChoosePause].forEach(function(itemTime) {
            itemTime.onclick = function() {
                this.classList.add("active");
                var mainTime = this.textContent.slice(0, 2);
                var timeToPause = (Number(mainTime))*60000;
                alert(`Trình phát nhạc sẽ tự động tắt sau ${mainTime} phút`);
                setTimeout(function (){
                  audio.pause();
                }, timeToPause);
            };
        });
        // change time by input
        timePauseAuto.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                var timeToPause = (this.value)*60000;
                alert(`Trình phát nhạc sẽ tự động tắt sau ${this.value} phút`);
                setTimeout(function (){
                  audio.pause();
                },timeToPause);
                this.value = '';
            };
        });
        setTime.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                var timeToPause = (this.value)*60000;
                alert(`Trình phát nhạc sẽ tự động tắt sau ${this.value} phút`);
                setTimeout(function (){
                  audio.pause();
                },timeToPause);
                this.value = '';
            };
        });

        // change volume
        volume.onchange = function () {
            audio.volume = this.value/100;
        }
        // when click song it will render this next
        musicsContainer.onclick = function(e) {
            var songNode = e.target.closest('.music-infor-item:not(.active)');
            // remove class active before add
            _this.removeActive();
            if(songNode || e.target.closest('.music-infor-item')) {
                // call hàm add active
                _this.addActiveAuto(songNode);
                var indexMusic = songNode.getAttribute('data-set');
                if(indexMusic !== _this.currentIndex) {
                    _this.currentIndex = Number(indexMusic);
                    _this.loadCurrentSong();
                    audio.play();
                };
            };
        };
    },
    removeActive: function() {
        // list item check
        var listCheckMusics = musicsContainer.querySelectorAll('.music-infor-item');
        [...listCheckMusics].forEach(function(item) {
            item.classList.remove('active');
        });
    },
    // add active
    addActiveAuto: function(ele) {
        ele.classList.add("active");
    },
    // app thêm và xóa active chỉ cần truyền vào currentIndex;
    appActive: function() {
         // list item check
         var listCheckMusics = musicsContainer.querySelectorAll('.music-infor-item');
         // add and remove active 
        this.removeActive();
        this.addActiveAuto([...listCheckMusics][this.currentIndex]);
    },
    // redo music
    // redoMusic: function() {
        
    // },
    // next bài  hát tiếp theo
    nextSong: function() {
        this.currentIndex += 1;
        if(this.currentIndex >= this.listMusic.length) {
            this.currentIndex = 0;
        };
        this.loadCurrentSong();
        this.appActive();
    },
    // prev bài hát
    prevSong: function() {
        this.currentIndex -=1;
        if(this.currentIndex < 0) {
            this.currentIndex = this.listMusic.length - 1;
        };
        this.loadCurrentSong();
        this.appActive();
    },
    // format time music
    formatSecondsAsTime: function(secs, format) {
        var hr  = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600))/60);
        var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
      
        if (min < 10){ 
          min = "0" + min; 
        };
        if (sec < 10){ 
          sec  = "0" + sec;
        };
      
        return min + ':' + sec;
      },
    // load curent song
    loadCurrentSong: function() {
        nameSong.textContent = this.currentSong.name;
        singerSong.textContent = this.currentSong.singer;
        imgSong.src = this.currentSong.image;
        audio.src = this.currentSong.source;
        imgMain.src = this.currentSong.image;
        // menu pop up
        imgMenuPopUp.src = this.currentSong.image;
        nameMusicMenuPopUp.textContent = this.currentSong.name;
        nameSingerMenuPopUp.textContent = this.currentSong.singer;
    },
    // render list music
    start: function() {
        // define new mofify
        this.defineProperties();
        // handle all event in website
        this.handleEvents();
        // load crrent song 
        this.loadCurrentSong();
        // render data
        this.render();
    }
};
app.start();