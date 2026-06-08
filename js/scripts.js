const Ljud = new Audio("audio1.mp3")



document.addEventListener("keydown", (event) => {

    const key = event.key.toLocaleLowerCase();

    console.log(event.key);

    if (key=== "m" ){
        Ljud.currentTime =0;
        Ljud.play();
    }

    if(event.key == "q"){
        document.getElementById("q").style = "color:green";
    }

    else if(event.key == "w"){
        document.getElementById("w").style = "color:red";
    }
    else if(event.key == "e"){
        document.getElementById("e").style = "color:blue";
    }
    else if(event.key == "r"){
        document.getElementById("r").style = "color:gold";
    }
    else if(event.key == "t"){
        document.getElementById("t").style = "color:brown";
    }
    else if(event.key == "y"){
        document.getElementById("y").style = "color:gray";
    }
    else if(event.key == "u"){
        document.getElementById("u").style = "color:pink";
    }
    else if(event.key == "i"){
        document.getElementById("i").style = "color:orange";
    }
    else if(event.key == "o"){
        document.getElementById("o").style = "color:teal";
    }
    else if(event.key == "p"){
        document.getElementById("p").style = "color:red";
    }
    else if(event.key == "å"){
        document.getElementById("å").style = "color:crimson";
    }
    else if(event.key == "capslock"){
        document.getElementById("caps").style= "color:black";
        }
    else if(event.key == "a"){
        document.getElementById("a").style = "color:darkgoldenrod";
    }
    else if(event.key == "s"){
        document.getElementById("s").style = "color:darkgreen";
    }
    else if(event.key == "d"){
        document.getElementById("d").style = "color:lightblue";
    }
    else if(event.key == "f"){
        document.getElementById("f").style = "color:blue";
    }
    else if(event.key == "g"){
        document.getElementById("g").style = "color:linen";
    }
    else if(event.key == "h"){
        document.getElementById("h").style = "color:navy";
    }
    else if(event.key == "j"){
        document.getElementById("j").style = "color:plum";
    }
    else if(event.key == "k"){
        document.getElementById("k").style = "color:seagreen";
    }
    else if(event.key == "l"){
        document.getElementById("l").style = "color:lemonchiffon";
    }
    else if(event.key == "ö"){
        document.getElementById("ö").style = "color:lawngreen";
    }
    else if(event.key == "ä"){
        document.getElementById("ä").style = "color:indigo";
    }
    else if(event.key == "z"){
        document.getElementById("z").style = "color:grey";
    }
    else if(event.key == "x"){
        document.getElementById("x").style = "color:greenyellow";
    }
    else if(event.key == "c"){
        document.getElementById("c").style = "color:black";
    }

    else if(event.key == "v"){
        document.getElementById("v").style = "color:firebrick";
    }

    else if(event.key == "b"){
        document.getElementById("b").style = "color:darkblue";
    }

    else if(event.key == "n"){
        document.getElementById("n").style = "color:bisque";
    }

    else if(event.key == "m"){
        document.getElementById("m").style = "color:purple";
    }
});
document.addEventListener("keyup", (event) => {

    console.log(event.key);


    if(event.key == "q"){
        document.getElementById("q").style = "color:white";
    }

    else if(event.key == "w"){
        document.getElementById("w").style = "color:white";
    }
    else if(event.key == "e"){
        document.getElementById("e").style = "color:white";
    }
    else if(event.key == "r"){
        document.getElementById("r").style = "color:white";
    }
    else if(event.key == "t"){
        document.getElementById("t").style = "color:white";
    }
    else if(event.key == "y"){
        document.getElementById("y").style = "color:white";
    }
    else if(event.key == "u"){
        document.getElementById("u").style = "color:white";
    }
    else if(event.key == "i"){
        document.getElementById("i").style = "color:white";
    }
    else if(event.key == "o"){
        document.getElementById("o").style = "color:white";
    }
    else if(event.key == "p"){
        document.getElementById("p").style = "color:white";
    }
    else if(event.key == "å"){
        document.getElementById("å").style = "color:white";
    }
    else if(event.key == "capslock"){
        document.getElementById("caps").style= "color:white";
    }
    else if(event.key == "a"){
        document.getElementById("a").style = "color:white";
    }
    else if(event.key == "s"){
        document.getElementById("s").style = "color:white";
    }
    else if(event.key == "d"){
        document.getElementById("d").style = "color:white";
    }
    else if(event.key == "f"){
        document.getElementById("f").style = "color:white";
    }
    else if(event.key == "g"){
        document.getElementById("g").style = "color:white";
    }
    else if(event.key == "h"){
        document.getElementById("h").style = "color:white";
    }
    else if(event.key == "j"){
        document.getElementById("j").style = "color:white";
    }
    else if(event.key == "k"){
        document.getElementById("k").style = "color:white";
    }
    else if(event.key == "l"){
        document.getElementById("l").style = "color:white";
    }
    else if(event.key == "ö"){
        document.getElementById("ö").style = "color:white";
    }
    else if(event.key == "ä"){
        document.getElementById("ä").style = "color:white";
    }
    else if(event.key == "z"){
        document.getElementById("z").style = "color:white";
    }
    else if(event.key == "x"){
        document.getElementById("x").style = "color:white";
    }
    else if(event.key == "c"){
        document.getElementById("c").style = "color:white";
    }

    else if(event.key == "v"){
        document.getElementById("v").style = "color:white";
    }

    else if(event.key == "b"){
        document.getElementById("b").style = "color:white";
    }

    else if(event.key == "n"){
        document.getElementById("n").style = "color:white";
    }

    else if(event.key == "m"){
        document.getElementById("m").style = "color:white";
    }
});