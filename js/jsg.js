window.onload = function () {
    var moveTimer = setInterval(move, 15);
    var addTimer = setInterval(addTube, 1500);
    document.querySelector(".layout").style.backgroundPositionX = "0px";
    var layout = document.querySelector(".layout");
    var tube = document.querySelectorAll(".tube");
    var bird = document.querySelector(".bird");
    var tubePosion = [];
    var screenWidht = document.body.offsetWidth;
    var tubeNum = 0;

    function move() {
        tube = document.querySelectorAll(".tube");
        layout.style.backgroundPositionX = (parseInt(layout.style.backgroundPositionX) - 3) + "px";
        for (var i = 0; i < tube.length; i++) {
            tube[i].style.left = (parseInt(tube[i].style.left) - 3) + "px";
        }
        over();
    }

    function addTube() {
        var json = [-150, -200, -320, -250];
        var random = Math.floor(Math.random() * 4);
        var screenWidth = document.body.offsetWidth;
        var tu = document.createElement("div");
        var tuTop = document.createElement("div");
        var tuBottom = document.createElement("div");
        tuTop.className = "tubeall tube-top"
        tuBottom.className = "tubeall tube-bottom"
        tu.appendChild(tuTop);
        tu.appendChild(tuBottom);
        tu.className = "tube";
        tu.style.left = screenWidth + "px"
        tu.style.top = json[random] + "px";
        layout.appendChild(tu);
        tubePosion.push(tu.style.top);
    }


    var i = 0;
    setInterval(function () {
        if (i === 3) {
            i = 0;
        }
        bird.style.backgroundPositionX = -52 * i + "px";
        i++;
    }, 300);

    function birdMove() {
        bird.style.top = "100px";
        var speed = 0;
        var g = 1;
        var timerDown = setInterval(function () {
            speed = speed + g;
            bird.style.top = (parseInt(bird.style.top) + speed) + "px";
        }, 25)
        window.onclick = function () {
            speed = -10;
        };
        window.ontouchstart = function () {
            speed = -10;
        };
    }

    birdMove();
    var ttop, tbom;

    function over() {
        if (bird.offsetTop <= 0 || bird.offsetTop >= 555) {
            clearInterval(moveTimer);
            clearInterval(addTimer);
        }
        if ((parseInt(layout.style.backgroundPositionX) + (screenWidht + 300 - 100 - 45)) % 300 > -52
            && parseInt(layout.style.backgroundPositionX) + (screenWidht + 300 - 100 - 45) <= 0) {
            if (
                (parseInt(layout.style.backgroundPositionX) + (screenWidht + 300 - 100 - 45)) % 300 === 0
                || (parseInt(layout.style.backgroundPositionX) + (screenWidht + 300 - 100 - 45)) % 300 === -1
                || (parseInt(layout.style.backgroundPositionX) + (screenWidht + 300 - 100 - 45)) % 300 === -2
            ) {
                ttop = 420 + parseInt(tubePosion[tubeNum]);
                tbom = 20 - parseInt(tubePosion[tubeNum]);
                tubeNum++;
            }
            console.log(2);
            if (bird.offsetTop < ttop || bird.offsetTop > (600 - 45 - tbom)) {
                clearInterval(moveTimer);
                clearInterval(addTimer);
            }
        }
    }

    // document.querySelector(".layout").onclick = function () {
    //     move();
    //     addTube();
    // }
    // move();
};