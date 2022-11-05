// THESE FUNCTIONS HELP ME OPTIMIZE MY CODE AND NOT SPEND TOO MUCH TIME ADDING EVERYTHING BY HAND
//      THERE ARE 9 origins : from "topLeft" to "bottomRight"

let elements = [];

function gameElements(name, sprite) {
    this.name = name;
    this.sprite = sprite;
    this.states = {};
}

function createSprite(name, imgSource, ...others) {
    let canIConstruct = true;
    elements.forEach((e) => {
        if (e.name == name) canIConstruct = false;
    });

    if (!canIConstruct) return console.log(`error: game element "` + name + `" already exists`);
    else {
        let gameElement = new gameElements(name, imgSource);
        elements.push(gameElement);
        for (let other of others) {
            let splitVar = other.split(" "),
                cusObj = splitVar[0],
                cusSprite = splitVar[1];
            
            elements[elements.length - 1].states[cusObj] = cusSprite;
        }
    }
}

function add({ name, position, scale, origin, sprite }) {
    let spriteSrc = "";
    console.log(elements)

    elements.forEach((e, i) => {
        if (e.name == name) {
            if (sprite == undefined) spriteSrc = e.sprite;
            else {
                if(e.states[sprite] != undefined) spriteSrc = e.states[sprite];
            }
        }
    });

    if (spriteSrc == "") return console.log(`error: no sprite found for "` + name + `"`)

    let newElement = document.createElement("img");
    newElement.setAttribute("src", spriteSrc);
    newElement.style.position = "relative";
    newElement.style.imageRendering = "crisp-edges";

    if (origin != undefined) {
        if (origin == "topLeft") newElement.style.transformOrigin = "0% 0%";
        if (origin == "top") newElement.style.transformOrigin = "50% 0%";
        if (origin == "topRight") newElement.style.transformOrigin = "100% 0%";
        if (origin == "left") newElement.style.transformOrigin = "0% 50%";
        if (origin == "middle") newElement.style.transformOrigin = "50% 50%";
        if (origin == "right") newElement.style.transformOrigin = "100% 50%";
        if (origin == "bottomLeft") newElement.style.transformOrigin = "0% 100%";
        if (origin == "bottom") newElement.style.transformOrigin = "50% 100%";
        if (origin == "bottomRight") newElement.style.transformOrigin = "100% 100%";
    }

    if (position != undefined) {
        if (!isNaN(position[0])) newElement.style.left = position[0] + "px";
        else newElement.style.left = "0px";
        if (!isNaN(position[1])) newElement.style.top = position[1] + "px";
        else newElement.style.top = "0px";
    }

    if (scale != undefined) newElement.style.transform = "scale(" + scale + ")";

    return document.body.appendChild(newElement);
}

/* EXAMPLE OFF ADDING THINGS

createSprite("EXAMPLE", "Images/X.png", 'angry Images/Y.png', 'sad Images/Z.png');

let testChar = add({
    name: "EXAMPLE",
    position: [200, 200],
    scale: 5,
    origin: "middle",
    sprite: "lol"
});

//setTimeout(() => {testChar.remove()}, 2000); */