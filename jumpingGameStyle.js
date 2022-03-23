/* Jumping game */

let character = document.getElementById("jumpingCharacter");
let block = document.getElementById("jumpingBlock");
let counter=0;



function jump()
{
    if (character.classList == "jumpingAnimate"){return}
    character.classList.add("jumpingAnimate");
 
    setTimeout(function()
    {
        character.classList.remove("jumpingAnimate");
    },500);

    changeJumpingBlock();

    function changeJumpingBlock() {
        if (counter / 100 < 3) {
            document.getElementById('jumpingBlock').setAttribute("style", "width:25px");
        }
        else if (counter / 100 > 3 && counter / 100 < 7) {
            document.getElementById('jumpingBlock').setAttribute("style", "width:50px");
        }
        else if (counter / 100 >= 7 && counter / 100 < 10) {
            document.getElementById('jumpingBlock').setAttribute("style", "width:80px");
        }
        else if (counter / 100 >= 10 && counter / 100 < 15) {
            document.getElementById('jumpingBlock').setAttribute("style", "width:15px");
        }
        else if (counter / 100 >= 15) {
            document.getElementById('jumpingBlock').setAttribute("style", "width:30px");
        }
    }   
    
    // earns money
    let number = Number(document.getElementById("jumpingScoreSpan").innerHTML);
    if (!isNaN(number) && number != 0)
    {
        money = Number(sessionStorage.getItem("moneyStorage"));
        money = money + 1;
        document.getElementById("money").innerHTML = money;
        sessionStorage.setItem("moneyStorage", money);
    }
}

setInterval(function() 
{
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (characterTop < 150)
    {
        document.getElementById('left-eye').setAttribute("style", "background-color: white;");
        document.getElementById('right-eye').setAttribute("style", "background-color: white;");
    }
    else
    {
        document.getElementById('left-eye').setAttribute("style", "background-color: black;");
        document.getElementById('right-eye').setAttribute("style", "background-color: black;");
    }

    if (blockLeft<20 && blockLeft>-20 && characterTop>=145)
    {
        block.style.animation = "none";
    
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else
    {
        counter++;    
        document.getElementById("jumpingScoreSpan").innerHTML = Math.floor(counter/100);
}}, 1);



let FirstPart = "background-color:";
let SecondPart = sessionStorage.getItem("newBackgroundColor");
let result = FirstPart.concat(SecondPart);
document.getElementById('jumpingCharacter').setAttribute("style", result);

function RedCharacter() {
    let money = Number(sessionStorage.getItem("moneyStorage"));
    if (money >= 5)
    {
        let color = "red"
        sessionStorage.setItem("newBackgroundColor", color);
        money = money - 5;
        sessionStorage.setItem("moneyStorage", money);
        document.getElementById("money").innerHTML = money;
    }
    else if (money < 5)
    {
        document.getElementById("shopErrorText").innerHTML = "Not enough money";   
        // activate shake from css
        var element = document.getElementById('shopErrorTextContainer');
        if (element.classList.contains("shopErrorTextContainerAddShake")) element.classList.remove('shopErrorTextContainerAddShake');
        else element.classList.add('shopErrorTextContainerAddShake');
    }
}

function OrangeCharacter() {
    let money = Number(sessionStorage.getItem("moneyStorage"));
    if (money >= 5)
    {
        let color = "orange"
        sessionStorage.setItem("newBackgroundColor", color);
        money = money - 5;
        sessionStorage.setItem("moneyStorage", money);
        document.getElementById("money").innerHTML = money;
    }
    else if (money < 5)
    {
        document.getElementById("shopErrorText").innerHTML = "Not enough money";   
        // activate shake from css
        var element = document.getElementById('shopErrorTextContainer');
        if (element.classList.contains("shopErrorTextContainerAddShake")) element.classList.remove('shopErrorTextContainerAddShake');
        else element.classList.add('shopErrorTextContainerAddShake');
    }
}

function BlueCharacter() {
    let money = Number(sessionStorage.getItem("moneyStorage"));
    if (money >= 5)
    {
        let color = "blue"
        sessionStorage.setItem("newBackgroundColor", color);
        money = money - 5;
        sessionStorage.setItem("moneyStorage", money);
        document.getElementById("money").innerHTML = money;
    }
    else if (money < 5)
    {
        document.getElementById("shopErrorText").innerHTML = "Not enough money";   
        // activate shake from css
        var element = document.getElementById('shopErrorTextContainer');
        if (element.classList.contains("shopErrorTextContainerAddShake")) element.classList.remove('shopErrorTextContainerAddShake');
        else element.classList.add('shopErrorTextContainerAddShake');
    }
}

function GreenCharacter() {
    let money = Number(sessionStorage.getItem("moneyStorage"));
    if (money >= 5)
    {
        let color = "green"
        sessionStorage.setItem("newBackgroundColor", color);
        money = money - 5;
        sessionStorage.setItem("moneyStorage", money);
        document.getElementById("money").innerHTML = money;
    }
    else if (money < 5)
    {
        document.getElementById("shopErrorText").innerHTML = "Not enough money";   
        // activate shake from css
        var element = document.getElementById('shopErrorTextContainer');
        if (element.classList.contains("shopErrorTextContainerAddShake")) element.classList.remove('shopErrorTextContainerAddShake');
        else element.classList.add('shopErrorTextContainerAddShake');
    }
}


/* Jumping game */

