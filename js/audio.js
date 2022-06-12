const player2 = document.querySelector('.player2'),
    play2 = document.querySelector('.btn-player2'),
    audio2 = document.querySelector('.audio2'),
    player = document.querySelector('.player'),
    play = document.querySelector('.btn-player'),
    audio = document.querySelector('.audio'),
    progress2 = document.querySelector('.progress2'),
    inprogress2 = document.querySelector('.in-progress2'),
    progress = document.querySelector('.progress'),
    inprogress = document.querySelector('.in-progress'),
    n1 = document.querySelector('.n1'),
    n2 = document.querySelector('.n2'),
    n3 = document.querySelector('.n3'),
    n4 = document.querySelector('.n4'),
    n5 = document.querySelector('.n5'),
    n6 = document.querySelector('.n6'),
    timeplayer = document.querySelector('.timeplayer'),
    fulltimeplayer = document.querySelector('.fulltimeplayer'),
    timeplayer2 = document.querySelector('.timeplayer2'),
    fulltimeplayer2 = document.querySelector('.fulltimeplayer2')

const songs = ['1','2','3','4','5','6']

let songIndex = 1

function loadTrack(){
    n1.style.color="#FFF"
    n1.style.fontWeight="400"
    n2.style.color="#FFF"
    n2.style.fontWeight="400"
    n3.style.color="#FFF"
    n3.style.fontWeight="400"
    n4.style.color="#FFF"
    n4.style.fontWeight="400"
    n5.style.color="#FFF"
    n5.style.fontWeight="400"
    n6.style.color="#FFF"
    n6.style.fontWeight="400"
    audio2.currentTime = 0
    switch (songIndex) {
        case 0:
            audio2.src='audio/1.mp3'
            n1.style.color="#7A66CC"
            n1.style.fontWeight="600"
            break;
        case 1:
            audio2.src='audio/2.mp3'
            n2.style.color="#7A66CC"
            n2.style.fontWeight="600"
            break;
        case 2:
            audio2.src='audio/3.mp3'
            n3.style.color="#7A66CC"
            n3.style.fontWeight="600"
            break;
        case 3:
            audio2.src='audio/4.mp3'
            n4.style.color="#7A66CC"
            n4.style.fontWeight="600"
            break;
        case 4:
            audio2.src='audio/5.mp3'
            n5.style.color="#7A66CC"
            n6.style.fontWeight="600"
            break;
        case 5:
            audio2.src='audio/6.mp3'
            n6.style.color="#7A66CC"
            n6.style.fontWeight="600"
            break;
    }
    playSong()
}
loadTrack()

function playSong(){
    play2.src ='img/pause.png'
    player2.classList.add('play')
    audio2.play()
}

function pauseSong(){
    play2.src ='img/play.png'
    player2.classList.remove('play')
    audio2.pause()
}

play2.addEventListener('click',() => {
    const isPlaying = player2.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    inprogress2.style.width = `${progressPercent}%`
    if(currentTime > 0){

        let ftmin = Math.floor(duration / 60)
        let ftsec = Math.floor(duration % 60)
        let tmin = Math.floor(currentTime / 60)
        let tsec = Math.floor(currentTime % 60)

        if (ftsec<10){
            fulltimeplayer.innerHTML = ftmin + ":0" + ftsec
        } else{

            fulltimeplayer.innerHTML = ftmin + ":" + ftsec
        }
        if (tsec<10){
            timeplayer.innerHTML = tmin + ":0" + tsec
        } else{

            timeplayer.innerHTML = tmin + ":" + tsec
        }

    } else{
        timeplayer.innerHTML ="0:00"
        fulltimeplayer.innerHTML ="0:00"
    }
}
audio2.addEventListener('timeupdate', updateProgress)

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio2.duration

    audio2.currentTime = (clickX / width) * duration
}
progress2.addEventListener('click', setProgress)





function setn1(e){
    songIndex = 0
    loadTrack()
}
n1.addEventListener('click', setn1)

function setn2(e){
    songIndex = 1
    loadTrack()
}
n2.addEventListener('click', setn2)

function setn3(e){
    songIndex = 2
    loadTrack()
}
n3.addEventListener('click', setn3)

function setn4(e){
    songIndex = 3
    loadTrack()
}
n4.addEventListener('click', setn4)

function setn5(e){
    songIndex = 4
    loadTrack()
}
n5.addEventListener('click', setn5)

function setn6(e){
    songIndex = 5
    loadTrack()
}
n6.addEventListener('click', setn6)



function playSong2(){
    play.src ='img/pause.png'
    player.classList.add('play')
    audio.play()
}

function pauseSong2() {
    play.src = 'img/play.png'
    player.classList.remove('play')
    audio.pause()
}
play.addEventListener('click',() => {
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong2()
    } else{
        playSong2()
    }
})

function updateProgress2(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    inprogress.style.width = `${progressPercent}%`
    if(currentTime > 0){

        let ftmin = Math.floor(duration / 60)
        let ftsec = Math.floor(duration % 60)
        let tmin = Math.floor(currentTime / 60)
        let tsec = Math.floor(currentTime % 60)

        if (ftsec<10){
            fulltimeplayer2.innerHTML = ftmin + ":0" + ftsec
        } else{

            fulltimeplayer2.innerHTML = ftmin + ":" + ftsec
        }
        if (tsec<10){
            timeplayer2.innerHTML = tmin + ":0" + tsec
        } else{

            timeplayer2.innerHTML = tmin + ":" + tsec
        }

    } else{
        timeplayer2.innerHTML ="0:00"
        fulltimeplayer2.innerHTML ="0:00"
    }
}
audio.addEventListener('timeupdate', updateProgress2)

function setProgress2(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
progress.addEventListener('click', setProgress2)