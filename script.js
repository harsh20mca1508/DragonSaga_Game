var score = 0;

var cross = true;
audio = new Audio('bgmusic.mp3')
audiogo =new Audio('musicgo.mp3')
setTimeout(() => {
    audio.play()
}, 100);

document.onkeydown = function(e) {
   // console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        } , 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 120 + "px";
    }

    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 120) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    options = document.querySelector('.options');

    var dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    var dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    var ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    var oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    
    
    var offsetX = Math.abs(dx-ox);
    var offsetY = Math.abs(dy-ox);
    //console.log(offsetX,offsetY)

    if(offsetX < 50 && offsetY > 100){
        gameover.style.visibility = 'visible';
        options.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audio.pause()
        audiogo.play()
        
        options.class.visibility = 'visible';
        setTimeout(() => {
            audiogo.pause();
        }, 3000);
      
    }
    
    else if(offsetX <10 && cross == true){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },50);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.01;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)

        },200);

    }

}, 10);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: "+ score
}

