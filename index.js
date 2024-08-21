

const deg = 6
const hr = document.querySelector("#hr")
const min = document.querySelector("#min")
const soundControl = document.querySelector("#sound-control")
const sound = document.querySelector("#sound")
const dots = document.querySelector("#dots")
const clock = document.querySelector("#clock")
const clockWidth = clock.clientWidth
const center = clockWidth / 2
const radius = center - deg


setInterval(()=>{

    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg

    hr.style.transform = `rotateZ(${hh + ( mm / 12)}deg)`
    min.style.transform = `rotateZ(${mm}deg)`

}, 1000)

soundControl.addEventListener("click", ()=>{

    if(sound.paused){
        sound.play()
    }else{
        sound.muted = !sound.muted
    }

    if(sound.muted){
        soundControl.innerHTML = "<i class='bx bx-volume-mute'></i>"
    }else{
        soundControl.innerHTML = "<i class='bx bx-volume-full'></i>"
    }

})

for (let index = 1; index <= 60; index++) {
   
    let angle = (index * deg) * (Math.PI / 180)

    let x = center + radius * Math.cos(angle)
    let y = center + radius * Math.sin(angle)

    let dot = document.createElement("div")
    dot.classList.add("dot")

    dot.style.left = `${x}px`
    dot.style.top = `${y}px`

    if(index % 5 === 0){
        dot.classList.add("big-dot")
    }

    dots.appendChild(dot)
    
}