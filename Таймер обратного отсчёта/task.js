

const interval = setInterval(() => {
    const timerCount = document.getElementById('timer');
    /*console.log (timerCount);
    //const newVal = timerCount.innerHTML - 1;
    //timerCount.innerHTML = newVal;
    //if (newVal <= 0) {*/
    if (--timerCount.innerHTML <= 0) {
        setTimeout(() => {      
            alert('Вы победили в конкурсе');
        }, 0);
        clearInterval(interval);
    } 
    
}, 1000);