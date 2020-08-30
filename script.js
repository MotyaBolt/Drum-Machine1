function playSound (idOfSound) {
    let sound = document.getElementById(idOfSound);
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 81) {
        let sound = document.getElementById('Q')
        sound.currentTime = 0;
        sound.play()
        document.getElementById('display').innerHTML = 'Chord 1';
        document.getElementById('Chord_1').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Chord_1').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 87) {
        let sound = document.getElementById('W')
        sound.currentTime = 0;
        sound.play()
        document.getElementById('display').innerHTML = 'Chord 2';
        document.getElementById('Chord_2').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Chord_2').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 69) {
        let sound = document.getElementById('E')
        sound.currentTime = 0;
        sound.play();
        document.getElementById('display').innerHTML = 'Chord 3';
        document.getElementById('Chord_3').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Chord_3').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 65) {
        let sound = document.getElementById('A')
        sound.currentTime = 0;
        sound.play();
        document.getElementById('display').innerHTML = 'Shaker';
        document.getElementById('Shaker').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Shaker').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 83) {
        let sound = document.getElementById('S')
        sound.currentTime = 0;
        sound.play();
        document.getElementById('display').innerHTML = 'Open HH';
        document.getElementById('Open_HH').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Open_HH').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 68) {
        let sound = document.getElementById('D')
        sound.currentTime = 0;
        sound.play();
        document.getElementById('display').innerHTML = 'Closed HH';
        document.getElementById('Closed_HH').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Closed_HH').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 90) {
        let sound = document.getElementById('Z')
        sound.currentTime = 0;
        sound.play();
        document.getElementById('display').innerHTML = 'Kick';
        document.getElementById('Kick').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Kick').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 88) {
        let sound = document.getElementById('X')
        sound.currentTime = 0;
        sound.play();
        document.getElementById('display').innerHTML = 'Snare 1';
        document.getElementById('Snare_1').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Snare_1').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
    else if(e.keyCode == 67) {
        let sound = document.getElementById('C')
        sound.currentTime = 0;
        sound.play();
        document.getElementById('display').innerHTML = 'Snare 2';
        document.getElementById('Snare_2').style.backgroundColor = "rgb(163, 64, 64)";
        document.addEventListener('keyup', function () {
            document.getElementById('Snare_2').style.backgroundColor = "rgb(126, 59, 59)"
        })
    }
})
