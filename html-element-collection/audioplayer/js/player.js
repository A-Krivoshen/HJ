const tracks = [
    [
	'LA Chill Tour', 
	'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3'
    ],
    [
	'This is it band',
	'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3'
    ],
    [
	'LA Fusion Jam',
	'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3'
    ]
];
const mediaplayers = document.getElementsByClassName('mediaplayer');
const playClass = 'play';

for (const mediaplayer of mediaplayers) {
    const playstate = mediaplayer.getElementsByClassName('playstate')[0];
    const audio = mediaplayer.getElementsByTagName('audio')[0];
    const stop = mediaplayer.getElementsByClassName('stop')[0];
    const back = mediaplayer.getElementsByClassName('back')[0];
    const next = mediaplayer.getElementsByClassName('next')[0];
    const title = mediaplayer.getElementsByClassName('title')[0];
    let currentTrack = 0;

    function getNextTrack() {
	currentTrack++;

	if (currentTrack > tracks.length - 1) {
	    currentTrack = 0;
	}

	return tracks[currentTrack];
    }
    
    function getPrevTrack() {
	currentTrack--;

	if (currentTrack < 0) {
	    currentTrack = tracks.length - 1;
	}

	return tracks[currentTrack];
    }

    function setTrack(track) {
	title.title = track[0];
	audio.src = track[1];
	
	if (mediaplayer.classList.contains(playClass)) {
	    audio.play();
	}
    }
    
    playstate.onclick = () => {
	if (mediaplayer.classList.contains(playClass)) {
	    audio.pause();
	} else {
	    audio.play();			
	}
	
	mediaplayer.classList.toggle(playClass);
    }
    
    stop.onclick = () => {
	mediaplayer.classList.remove(playClass);
	audio.pause();
	audio.currentTime = 0; 
    }
    
    next.onclick = () => {
	setTrack(getNextTrack());	
    }  
    
    back.onclick = () => {
	setTrack(getPrevTrack());
    }  
}