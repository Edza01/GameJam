let haveIt = [sessionStorage.getItem("haveItStorage")];
haveIt = haveIt.join('').split(',');
function get_random_image()
{
    image_array = [
        'atlas.jpg',
        'bigdog.jpg',
        'handle.jpg',
        'ls3.jpg',
        'rhex.jpg',
        'sandflea.jpg',
        'spot.jpg',
        'wildcat.jpg',
        'walle.jpg',
        'terminator.jpg',
        'rdrd.jpg',
        'optimus prime.jpg',
        'Mr.Robot.jpg',
        'bender.jpg'
    ]
    
    //Generate random number
    random_index = Math.floor(Math.random() * image_array.length);

    //Coerce to number by boxing
    selected_image = image_array[random_index]
   
    if(!haveIt.includes(selected_image)) {
        document.getElementById('image_shower').src = `./images/${selected_image}`
        haveIt.push(selected_image);
        sessionStorage.setItem("haveItStorage", haveIt);
        return selected_image;
    }
    else if (haveIt.includes(selected_image))
    {
        if (haveIt.length  >= image_array.length)
        {
            document.getElementById('image_shower').src = `functional_images/noMorePhotos.jpg`
            document.getElementById("guesstext").style.marginTop = "-10px"; 
            document.getElementById("guesstext").style.marginBottom = "5px"; 
            document.getElementById("guesstext").innerHTML = "Good Job!";

            //Remove last quessed word under button
            var element = document.getElementById("last");
            element.parentNode.removeChild(element);

            document.getElementById("inputAndButtonSubClass").style.marginTop = "20px";
        }
        else
        {
            return get_random_image();
        }
    }    
}


/* Money */
let money = 0;
updateDisplay();

function updateDisplay(){
    money = sessionStorage.getItem("moneyStorage");
    document.getElementById("money").innerHTML = money;
};
/* Money */

turn = 0;

function guess()
{
    imageName = selected_image.replaceAll('.jpg', '');
    
    turn += 1;
    
    if (document.getElementById("input").value == imageName)
    {
        /* Money */
        money++;
        sessionStorage.setItem("moneyStorage", money);
        updateDisplay();
        /* Money */

        document.getElementById("interact").innerHTML = "Took You " + turn + " Tries";

        setTimeout(function()
        {
            window.location.reload(false); 
        }, 3000);   
    }

    document.getElementById("last").innerHTML = "Last Guess: " + document.getElementById("input").value
}

/* For enter key input */
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        var inputVal = $(this).val();
        document.getElementById("enterButton").click();
    }
});
/* For enter key input */



/* falling coins */



function RainMoney(el) {
    var exists = document.getElementById('rainMoney')
    if (exists) {
        exists.parentNode.removeChild(exists);
        return false;
    }

    var element = document.querySelector(el);
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        focused = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = 'rainMoney'

    var coin = new Image();
    coin.src = 'http://i.imgur.com/5ZW2MT3.png'
    // 440 wide, 40 high, 10 states
    coin.onload = function () {
        element.appendChild(canvas)
        focused = true;
        drawloop();
    }
    var coins = []

    function drawloop() {
        if (focused) {
            requestAnimationFrame(drawloop);
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        if (Math.random() < .3) {
            coins.push({
                x: Math.random() * canvas.width | 0,
                y: -50,
                dy: 3,
                s: 0.5 + Math.random(),
                state: Math.random() * 10 | 0
            })
        }
        var i = coins.length
        while (i--) {
            var x = coins[i].x
            var y = coins[i].y
            var s = coins[i].s
            var state = coins[i].state
            coins[i].state = (state > 9) ? 0 : state + 0.1
            coins[i].dy += 0.3
            coins[i].y += coins[i].dy

            ctx.drawImage(coin, 44 * Math.floor(state), 0, 44, 40, x, y, 44 * s, 40 * s)

            if (y > canvas.height) {
                coins.splice(i, 1);
            }
        }
    }

}



// Robot
var robot = $("#indexContainer");
var speechBubble = $("#SpeechBubble");

robot.hover(
  function() {
    speechBubble.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechBubble.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);






