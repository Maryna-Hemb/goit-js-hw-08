import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_LOCAL = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

player.on('timeupdate', throttle(onPlayerCurrentTime, 1000));
function onPlayerCurrentTime(currentTime) {
    const currentSecond = currentTime.seconds;
    localStorage.setItem(KEY_LOCAL, JSON.stringify(currentSecond));
}

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_LOCAL)))
    .then(function (seconds) {
    seconds = JSON.parse(localStorage.getItem(KEY_LOCAL))
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

