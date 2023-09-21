let element = document.querySelector('.hole-game');
let dead = 0;
let lost = 0;
console.log(element);
element.onclick = (e) => {
    if (!e.target.classList.contains('hole')) {
        return;
    }
    if (e.target.classList.contains('hole_has-mole')) {
        dead++;
        document.getElementById('dead').innerHTML = dead;
    } else {
        lost++;
        document.getElementById('lost').innerHTML = lost;
    }
    if (lost >= 5) {
        setTimeout(() => {
            alert('Вы проиграли!');
            lost = 0;
            dead = 0;
            document.getElementById('lost').innerHTML = lost;
            document.getElementById('dead').innerHTML = dead;
        }, 0)
    }
    if ( dead >= 10) {
        setTimeout(alert('Игра окончена.'), 0)
        lost = 0;
        dead = 0;
        document.getElementById('lost').innerHTML = lost;
        document.getElementById('dead').innerHTML = dead;

    }
    
    console.log(e.target.classList.contains('hole'), dead, lost);
}

// element.onclick = null