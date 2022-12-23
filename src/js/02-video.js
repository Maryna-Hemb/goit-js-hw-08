import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

player.on('timeupdate', throttle(onPlayerCurrentTime, 1000));
function onPlayerCurrentTime(currentTime) {
    const currentSecond = currentTime.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentSecond));
}

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
    .then(function (seconds) {
    seconds = JSON.parse(localStorage.getItem("videoplayer-current-time"))
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

