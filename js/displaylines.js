let speed = 300;

window.onload = () => {
    document.getElementById("numberOfLinesLabel").innerText =
        document.getElementById("numberOfLines").value;
    displayLines();
    updateSlider();
    updateSpeed();
    selectionsort(getSpeed());
    reverseselectionsort(getSpeed());
}

window.onresize = () => {
    displayLines(document.getElementById("numberOfLines").value);
}

const displayLines = (numberOfLines = 25) => {
    const lineContainer = document.getElementById("container");
    while(lineContainer.hasChildNodes()) {
        lineContainer.removeChild(lineContainer.firstChild);
    }

    for(let i = 0; i < numberOfLines; i++) {
        let div = document.createElement("div");
        div.style.width = (lineContainer.clientWidth/25) + "px";
        div.style.height = (Math.random() * (lineContainer.clientHeight / 1.05)) + "px";
        div.className = "line";
        lineContainer.appendChild(div);
    }
}

const updateSlider = () => {
    document.getElementById("numberOfLines").addEventListener("input", () => {
        document.getElementById("numberOfLinesLabel").innerText =
            document.getElementById("numberOfLines").value;
        displayLines(document.getElementById("numberOfLines").value);
    });
}

const updateSpeed = () => {
    document.getElementById("speed").addEventListener("input", () => {
        console.log(document.getElementById("speed").value);
        switch(document.getElementById("speed").value) {
            case "1": speed = 500; break;
            case "2": speed = 400; break;
            case "3": speed = 300; break;
            case "4": speed = 200; break;
            case "5": speed = 100; break;
            case "6": speed = 75; break;
            case "7": speed = 50; break;
            case "8": speed = 25; break;
            case "9": speed = 10; break;
            case "10": speed = 5; break;
        }
        return speed;
    });
}

const getSpeed = () => {
    return speed;
}
