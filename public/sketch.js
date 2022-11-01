let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')

let userData = {};

let button = document.getElementById('sendData');

let startTime = performance.now();

let date = []
    date [0] = new Date().toLocaleString(),
    date = date[0].split(', ')

const getDeviceType = () => {
    const nav = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(nav)) {
        return 'tablet'
    } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        nav)) {
        return 'mobile'
    } else {
        return 'desktop';
    }
}

function setup () {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    
}

function draw () {
    background(255)
}

function calculateTimestamp () {
    let endTime = performance.now();
    timeDifference = endTime - startTime

    let seconds = Math.floor(timeDifference / 1000)
    let minutes = Math.floor(seconds / 60);

    let time = 0;

    if (minutes !== 0) {
        time = `${minutes} mins, ${seconds} seconds`
    } {
        time = `${seconds} seconds`
    }


    return time
}

button.addEventListener('click', () => {

    userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        location: 'Estación: Universidad ICESI',
        date: date[0],
        timeStarted: date[1],
        timeStamp: calculateTimestamp(),
        device: getDeviceType()
    }

    sendUserData(userData);

})

async function sendUserData(data) {
    const request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    await fetch('/userData', request);
    console.log(data);
}


