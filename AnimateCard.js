function cardAnimation(){
    const containers = document.getElementsByClassName("container");

    for (let container of containers){
        let card = container.querySelector(".card");
        container.addEventListener("mousemove", (e) => {
            let xAxis = ((container.clientWidth / 2 - (e.pageX-container.offsetLeft)) / 20);
            let yAxis = ((container.clientHeight / 2 - (e.pageY-container.offsetTop)) / 20);
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`
        })
    }
}

function activeButtons(){
    const voteContainers = document.getElementsByClassName("vote");

    for (let voteContainer of voteContainers){
        let btns = voteContainer.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", (e) => {
                let current = voteContainer.querySelector(".active");
                current.classList.toggle("active");
                e.target.classList.toggle("active");
        });
        }
    }
}

function rabbitPetting(){
    const containers = document.getElementsByClassName("container");

    for (let container of containers){
        let purchaseButton = container.querySelector(".petRabbitBtn");
        let rabbit = container.querySelector(".rabbit").querySelector("img");

        purchaseButton.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
            rabbit.classList.toggle("petting");
        })
    }
}

function main(){
    cardAnimation();
    activeButtons();
    rabbitPetting();
}

main();