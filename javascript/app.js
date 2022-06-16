// define 
var $ = document.querySelector.bind('document');
var $$ = document.querySelector.bind('document');
// appear scrollbar
var navLeftGener = document.querySelector('.nav-left-genre');
var mainMusic = document.querySelector('.main-music');
var mainListMusic = document.querySelector('.music-infor');
var listScrollbar = [navLeftGener, mainMusic, mainListMusic];

listScrollbar.forEach(function(scrollbarItem) {
// if has class "active", scrollbar will be visible
    scrollbarItem.addEventListener('mouseover', function() {
        this.classList.add('active');
    });
    scrollbarItem.addEventListener('mouseout', function() {
        this.classList.remove('active');
    });
});
// click control

var navItem = document.querySelectorAll('.nav-control-item');
var pageUpdate = document.querySelector('.page-update');
var wrapMusic = document.querySelector('.music-wrap');
var controlOnMobile = document.querySelectorAll('.btn-control-mobile-item');

[...navItem, ...controlOnMobile].forEach(function(item, index) {
    item.onclick = function() {
        addActive(this);
        if ([...navItem].includes(item)) {
            handlePageUpdate(pageUpdate, index);
        };
        if ([...controlOnMobile].includes(item)) {
            if(index !== 12) {
                checkError();
            }
            if(index == 12) {
                messageError.classList.remove('active');
            }
        };
    };
});

// function add class 'active'
function addActive(itemActive) {
    [...navItem, ...controlOnMobile].forEach(function(item, index) {
        if(index < [...navItem].length) {
            if([...navItem].includes(itemActive)) {
                item.classList.remove('active');
            };
        };
         // check có gồm phần tử item không nếu có lập qua remove
        if([...controlOnMobile].includes(itemActive)) {
            [...controlOnMobile].forEach(function(itemProfile) {
                itemProfile.classList.remove('active');
            });
        };
    });
    itemActive.classList.add('active');
};
// function handle render event
function handlePageUpdate(itemUpdate, indexItem) {
    if (indexItem !== 0) {
        itemUpdate.classList.add('active');
        wrapMusic.classList.add('hide');
        return;
    };
    wrapMusic.classList.remove('hide');
    pageUpdate.classList.remove('active');
};
// btn pause and play
var controlPlay = document.querySelector('.item-btn-playing .fa-play-circle');
var controlPause = document.querySelector('.item-btn-playing .fa-pause-circle');
var listClickHandle = [controlPlay, controlPause];
// listClickHandle.forEach(function(item) {
//     item.addEventListener('click', function() {
//         controlMusic(item);
//     });
// });
function controlMusic(itemMusic) {
    if(itemMusic == controlPlay) {
        itemMusic.classList.remove('active');
        controlPause.classList.add('active');
        return;
    };
    controlPlay.classList.add('active');
    controlPause.classList.remove('active');
};
// notice error
var messageError = document.querySelector('.main-notice-error');
var createPlaylist = document.querySelector('.create-playlist');
createPlaylist.addEventListener('click', checkError());
function checkError() {
    messageError.classList.add('active');
    setTimeout(function() {
        messageError.classList.remove('active');
    }, 6000);
}
// react
var hearts = document.querySelectorAll('.heart-music-playing .fas.fa-heart');
var heartAlbum = document.querySelectorAll('.icon-hiden-control .fa-heart');
[...hearts, ...heartAlbum].forEach(function(heart) {
    heart.onclick = function() {
        handleReact(this);
    };
});
// heart in list musics
function handleReact(heart) {
    heart.classList.toggle('active');
};
// chnage v
var timePauseAuto = document.querySelector('.item-btn-system-playing input[type="text"]');
var volume = document.querySelector('.item-btn-system-playing input[type="range"]');
var btnTime = document.querySelector('.item-btn-system-playing.time-wrap i');
var btnVolume = document.querySelector('.item-btn-system-playing.volume-wrap i');
btnTime.onclick = function() {
    timePauseAuto.classList.toggle('active');
    volume.classList.remove('active');
}
btnVolume.onclick = function() {
    volume.classList.toggle('active');
    timePauseAuto.classList.remove('active');
}
// close active mobile devices
var btnClose = document.querySelector('.close');
var btnMore = document.querySelector('.btn-more');
btnClose.onclick = function() {
    if(elementOpen.classList.contains('active')) {
        elementOpen.classList.remove('active');
        isCheckShow = true;
    }
}
var isCheckShow = false;
// mở mobile tap input
var elementOpen = document.querySelector('.playing-music');
elementOpen.onclick = function() {
    this.classList.add('active');
    btnClose.classList.remove('hide');
    btnMore.classList.remove('hide');
    if(elementOpen.classList.contains('active') && isCheckShow) {
        isCheckShow = false;
        elementOpen.classList.remove('active');
        btnClose.classList.add('hide');
        btnMore.classList.add('hide');
    };
};
// menu on tablet
var menuTablet = document.querySelector('.menu-on-taplet');
var btnbar = document.querySelector('.btn-bars i');
btnbar.onclick = function() {
    menuTablet.classList.toggle('active');
    if(btnbar.classList.contains('fa-bars')) {
        btnbar.classList.replace('fa-bars', 'fa-times');
        return;
    };
    btnbar.classList.replace('fa-times', 'fa-bars');
};
// overlay and menu functions
var overlay = document.querySelector('.overlay');
var menuFunctions = document.querySelector('.window-function');
var btnMore = document.querySelector('.btn-more');
var popupSetTime = document.querySelector('.pop-up-set-time');
var btnSetTime = document.querySelector('.btn-set-time');
btnMore.onclick = function() {
    overlay.classList.add('active');
    menuFunctions.classList.add('active');
};
btnSetTime.onclick = function() {
    popupSetTime.classList.add('active');
    menuFunctions.classList.remove('active');
};
overlay.onclick = function() {
    overlay.classList.remove('active');
    menuFunctions.classList.remove('active');
    popupSetTime.classList.remove('active');
};
// profile header control
var listDisplayUser = document.querySelectorAll('.main-music .music-wrap>div');
var containerProfile = document.querySelectorAll('.container_profile--head-item');
[...containerProfile].forEach(function(itemControl, index) {
    itemControl.onclick = function() {
        var textControl = this.textContent;
        [...containerProfile].forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
        var indexThisItemDisplay = index + 2;
        var thisEleShow = listDisplayUser[indexThisItemDisplay];
        switch (textControl) {
            case "Tổng quan":
                listDisplayUser[indexThisItemDisplay + 1].classList.add('active-show-interface');
                listDisplayUser[indexThisItemDisplay + 2].classList.add('active-show-interface');
                listDisplayUser[indexThisItemDisplay + 3].classList.add('active-show-interface');
                if(listDisplayUser[indexThisItemDisplay + 1].classList.contains('showfull')) {
                    listDisplayUser[indexThisItemDisplay + 1].classList.remove('showfull');
                }
                if(listDisplayUser[indexThisItemDisplay + 4].classList.contains('active-show-interface')) {
                    listDisplayUser[indexThisItemDisplay + 4].classList.remove('active-show-interface');
                }
                break;
            case "Bài hát":
                thisEleShow.classList.add('active-show-interface', 'showfull');
                function checkInterface(ele1, ele2, ele3, ele4) {
                    if(ele2.classList.contains('active-show-interface')) {
                        ele2.classList.remove("active-show-interface");
                    }
                    if(ele3.classList.contains('active-show-interface')) {
                        ele3.classList.remove("active-show-interface");
                    }
                    if(ele4.classList.contains('active-show-interface')) {
                        ele4.classList.remove("active-show-interface");
                    }
                }
                checkInterface(listDisplayUser[indexThisItemDisplay + 2],
                     listDisplayUser[indexThisItemDisplay + 1],
                      listDisplayUser[indexThisItemDisplay + 3], 
                      listDisplayUser[indexThisItemDisplay + 3]);
                break;
            case "Playlist":
                thisEleShow.classList.add('active-show-interface');
                function checkInterface(ele1, ele2, ele3, ele4) {
                    if(ele1.classList.contains('active-show-interface')) {
                        ele1.classList.remove("active-show-interface");
                    }
                    if(ele2.classList.contains('active-show-interface')) {
                        ele2.classList.remove("active-show-interface");
                    }
                    if(ele3.classList.contains('active-show-interface')) {
                        ele3.classList.remove("active-show-interface");
                    }
                }
                checkInterface(listDisplayUser[indexThisItemDisplay - 1],
                     listDisplayUser[indexThisItemDisplay + 1],
                      listDisplayUser[indexThisItemDisplay + 2], 
                      listDisplayUser[indexThisItemDisplay + 4])
                break;
            case "Album":
                thisEleShow.classList.add('active-show-interface');
                function checkInterface(ele1, ele2, ele3, ele4) {
                    if(ele1.classList.contains('active-show-interface')) {
                        ele1.classList.remove("active-show-interface");
                    }
                    if(ele2.classList.contains('active-show-interface')) {
                        ele2.classList.remove("active-show-interface");
                    }
                    if(ele3.classList.contains('active-show-interface')) {
                        ele3.classList.remove("active-show-interface");
                    }
                }
                checkInterface(listDisplayUser[indexThisItemDisplay - 1],
                      listDisplayUser[indexThisItemDisplay + -2],
                      listDisplayUser[indexThisItemDisplay + 1], 
                      listDisplayUser[indexThisItemDisplay + 4]);
                break;
            default:
                listDisplayUser[indexThisItemDisplay].classList.add('active-show-interface');
                function checkInterface(ele1, ele2, ele3, ele4) {
                    if(ele1.classList.contains('active-show-interface')) {
                        ele1.classList.remove("active-show-interface");
                    }
                    if(ele2.classList.contains('active-show-interface')) {
                        ele2.classList.remove("active-show-interface");
                    }
                    if(ele3.classList.contains('active-show-interface')) {
                        ele3.classList.remove("active-show-interface");
                    }
                }
                checkInterface(listDisplayUser[indexThisItemDisplay - 1],
                      listDisplayUser[indexThisItemDisplay - 2],
                      listDisplayUser[indexThisItemDisplay - 3], 
                      listDisplayUser[indexThisItemDisplay + 4]);
        }
    };
});
// menu search
var inputSearch = document.querySelector('.search-input');
var wraperSearch = document.querySelector('.wrap-search');
inputSearch.addEventListener('focus', function(e) {
    wraperSearch.classList.add('active');
    settings.classList.remove('active');
});
inputSearch.onblur = function() {
    wraperSearch.classList.remove('active');
};

// settings
var btnSetting = document.querySelector('.main-info-item-link .fa-cog');
var settings = document.querySelector('.settings');
btnSetting.onclick = function() {
    settings.classList.toggle('active');
    this.classList.toggle('animate');
};
mainMusic.onclick = function() {
    settings.classList.remove('active');
    this.classList.remove('animate');
};


// load window and practice functions 
window.onload = function () {
    range.value = 0;
    messageError.classList.remove('active');
};





