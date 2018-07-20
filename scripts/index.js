let isPlaying = false;
const btn = document.getElementById('btn');
const slider = document.getElementById('slider');
function toggle() {
    isPlaying = !isPlaying;
    btn.innerText = isPlaying ? 'Stop' : 'Play';
    if (isPlaying) {
        a.play();
        b.play();
    } else {
        a.stop();
        b.stop();
    }
}

function volumeChange() {
    const volume = parseInt(slider.value) / 10;
    b.volume(volume);
}

var a = new Howl({
    src: [ './assets/loop-a.mp3' ],
    loop: true
});
var b = new Howl({
    src: [ './assets/loop-b.mp3' ],
    volume: 0,
    loop: true
});
