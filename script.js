var isSound = false;


document.body.addEventListener('keyup', (event)=>{
playSound(event.code.toLowerCase());
});


document.querySelector('.composer button').addEventListener('click', async ()=>{
    let song = document.querySelector('#input').value.toLowerCase();

    if(song !=='' || isSound) {
        let songArray = song.split(''); 
        
        if (isSound) { 
            return
        }

        await playComposition(songArray);
        console.log("skip1")
    }

});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

if(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
}

if(keyElement) {
    keyElement.classList.add('active');

setTimeout(()=>{
    keyElement.classList.remove(`active`);

        },300);
    }
}


async function playComposition(songArray) { 
    let wait = 0;
    
    isSound = true
    
    for(let songItem of songArray) {
        playSound(`key${songItem}`);

        await awaitSound(250); 
    }

    isSound = false;
}

const awaitSound = (ms) => { 
    return new Promise(resolve => setTimeout(resolve, ms));
}