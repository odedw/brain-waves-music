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

let soundsLoaded = 0;
function soundLoaded(snd) {
    soundsLoaded++;
    if (soundsLoaded == 2) btn.disabled = false;
}

function volumeChange() {
    const volume = parseInt(slider.value) / 10;
    b.volume(volume);
}

var a = new Howl({
    src: [ './assets/loop-a.mp3' ],
    loop: true,
    onload: soundLoaded
});
var b = new Howl({
    src: [ './assets/loop-b.mp3' ],
    volume: 0,
    loop: true,
    onload: soundLoaded
});
