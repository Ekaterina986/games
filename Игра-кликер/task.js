const clicCount = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let count = 0;


cookie.onclick = () => {
    count += 1;
    console.log(count)
    
    clicCount.innerHTML = count;
    if (count % 2 == 0) {
        cookie.width -= 20;
        cookie.height -= 20;
    }

    else {cookie.width += 20;
        cookie.height += 20;}
    
}

