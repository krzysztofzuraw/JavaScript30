/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our functions */
function tooglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    //if(video.paused){
    //	video.play();
    //} else {
    //	video.pause();
    //}
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚'
    toggle.textContent = icon;
    console.log('Update the button');
}

function skip() {
    console.log(this.dataset);
}
/* Hook up the event listeners */
video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', tooglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
