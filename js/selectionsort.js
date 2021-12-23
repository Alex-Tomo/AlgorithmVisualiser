const selectionsort = () => {
    document.getElementById("selectionSort").addEventListener("click", async () => {
        let containerChildren = document.getElementById("container").children;

        for(let i = 0; i < containerChildren.length; i++) {
            containerChildren[i].style.backgroundColor = "#4285F4";
            let min = i;
            for(let j = i + 1; j < containerChildren.length; j++) {
                containerChildren[j].style.backgroundColor = "#4285F4";
                if(containerChildren.item(j).clientHeight < containerChildren.item(min).clientHeight) {
                    if(min != i) {
                        containerChildren[min].style.backgroundColor = "#FFFFFF";
                    }
                    min = j;
                }
                await sleep(getSpeed());
                if(min !== j) {
                    containerChildren[j].style.backgroundColor = "#FFFFFF";
                }
            }
            containerChildren[min].style.backgroundColor = "#FFFFFF";

            let temp = containerChildren[i].clientHeight;
            containerChildren[i].style.height = containerChildren[min].clientHeight + "px";
            containerChildren[min].style.height = temp + "px";

            containerChildren[i].style.backgroundColor = "#00FF00";
        }
    });
}

const reverseselectionsort = () => {
    document.getElementById("reverseSelectionSort").addEventListener("click", async () => {
        let containerChildren = document.getElementById("container").children;

        for(let i = 0; i < containerChildren.length; i++) {
            containerChildren[i].style.backgroundColor = "#4285F4";
            let min = i;
            for(let j = i + 1; j < containerChildren.length; j++) {
                containerChildren[j].style.backgroundColor = "#4285F4";
                if(containerChildren.item(j).clientHeight > containerChildren.item(min).clientHeight) {
                    if(min != i) {
                        containerChildren[min].style.backgroundColor = "#FFFFFF";
                    }
                    min = j;
                }
                await sleep(getSpeed());
                if(min !== j) {
                    containerChildren[j].style.backgroundColor = "#FFFFFF";
                }
            }
            containerChildren[min].style.backgroundColor = "#FFFFFF";

            let temp = containerChildren[i].clientHeight;
            containerChildren[i].style.height = containerChildren[min].clientHeight + "px";
            containerChildren[min].style.height = temp + "px";

            containerChildren[i].style.backgroundColor = "#00FF00";
        }
    });
}

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
