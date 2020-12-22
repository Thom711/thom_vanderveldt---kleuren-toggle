const body = document.querySelector('.white-background');
const menu = document.getElementById("menu-items");
const menuItems = Array.from(document.getElementsByTagName('li'));
const hamburger = document.querySelector('.nav__hamburger');
const codeBlock = document.getElementById("codeblock");

const showMenu = function(delay = 0) {
    menuItems.forEach(function(menuItem) {
        menuItem.style.transitionDelay = delay + "ms";
        menuItem.style.transform = "translateX(300px)";
        delay = delay + 100;
    });
}

const removeMenu = function(delay = 0) {
    menuItems.reverse().forEach(function(menuItem) {
        menuItem.style.transitionDelay = delay + "ms";
        menuItem.style.transform = "translateX(-300px)";
        delay = delay + 100;
    });
    menuItems.reverse();
}

const updateCodeBlock = function(colour) {
    switch(colour) {
        case "white-background":
            codeBlock.textContent = "wit";
            break;
        case "red-background":
            codeBlock.textContent = "rood";
            break;
        case "blue-background":
            codeBlock.textContent = "blauw";
            break;
        case "yellow-background":
            codeBlock.textContent = "geel";
            break;
        case "green-background":
            codeBlock.textContent = "groen";
            break;
        case "pink-background":
            codeBlock.textContent = "roze";
            break;
    }
}

const changeColour = function(target, colour) {
    target.classList = (colour);
    updateCodeBlock(colour);
    removeMenu();
}

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function(e) {
        changeColour(body, e.target.classList.value);
    });   
});

hamburger.addEventListener('mouseover', function() {
    showMenu();
});

hamburger.addEventListener('mouseout', function() {
    removeMenu();
});

menu.addEventListener('mouseover', function() {
    showMenu();
});

menu.addEventListener('mouseout', function() {
    removeMenu();
});

document.addEventListener('keydown', function(event) {
    switch(parseInt(event.key)) {
        case 1:
            changeColour(body, 'white-background');
            break;
        case 2:
            changeColour(body, 'red-background');
            break;
        case 3:
            changeColour(body, 'blue-background');
            break;
        case 4:
            changeColour(body, 'yellow-background');
            break;
        case 5:
            changeColour(body, 'green-background');
            break;
        case 6:
            changeColour(body, 'pink-background');
            break;    
    }
});