setInterval(() => {
    let time = document.querySelector('.time')
    let data = new Date();
    let seconds = data.getSeconds()
    let minust = data.getMinutes()
    let hourse = data.getHours()

    

    if(hourse < 10){
        hourse = '0' + hourse
    }
    if(minust < 10){
        minust = '0' + minust
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }



    time.textContent = hourse + ' : ' + minust + ' : ' + seconds
});


