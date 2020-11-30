function cardAnimation(){
    const containers = document.getElementsByClassName("container");

    for (let container of containers){
        let card = container.querySelector(".card");
        container.addEventListener("mousemove", (e) => {
            let xAxis = ((container.clientWidth / 2 - (e.pageX-container.offsetLeft)) / 20);
            let yAxis = ((container.clientHeight / 2 - (e.pageY-container.offsetTop)) / 20);
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
        })

        let rabbit = container.querySelector(".rabbit").querySelector("img");
        container.addEventListener("mouseenter", (e) => {
            card.style.transition = "none";
            //animating the rabbit also
            let prevTransform = rabbit.style.transform;
            if (prevTransform.includes("rotateY(180deg)")){
                rabbit.style.transform = "translateZ(2rem) rotateY(180deg)";
            } else {
                rabbit.style.transform = "translateZ(2rem)";
            }
        })

        //on mouse leave, put back everything
        container.addEventListener("mouseleave", (e) => {
            card.style.transition = "0.75s ease"
            card.style.transform = "rotateY(0) rotateX(0)";

            let prevTransform = rabbit.style.transform;
            if (prevTransform.includes("rotateY(180deg)")){
                rabbit.style.transform = "translateZ(0) rotateY(180deg)";
            } else {
                rabbit.style.transform = "translateZ(0)";
            }
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
            let prevTransform = rabbit.style.transform;
            e.target.classList.toggle("active");

            if (rabbit.classList.length === 0){
                if (prevTransform.includes("rotateY(180deg)")){
                    rabbit.classList.toggle("pettingLifted");
                } else {
                    rabbit.classList.toggle("pettingUnlifted");
                }
            } else {
                rabbit.classList = [];
            }
        })

        rabbit.addEventListener("click", (e) => {
            let prevTransform = rabbit.style.transform;
            if (prevTransform.includes("rotateY(180deg)")){
                rabbit.style.transform = prevTransform.replace("rotateY(180deg)", '');
                if (rabbit.classList.contains("pettingLifted")){
                    rabbit.classList.toggle("pettingLifted");
                    rabbit.classList.toggle("rotateAndPettingUnlifted");
                }
                if (rabbit.classList.contains("rotateAndPettingLifted")){
                    rabbit.classList.toggle("rotateAndPettingLifted");
                    rabbit.classList.toggle("rotateAndPettingUnlifted");
                }
            } else {
                rabbit.style.transform = prevTransform + " rotateY(180deg)";
                if (rabbit.classList.contains("pettingUnlifted")){
                    rabbit.classList.toggle("pettingUnlifted");
                    rabbit.classList.toggle("rotateAndPettingLifted");
                }
                if (rabbit.classList.contains("rotateAndPettingUnlifted")){
                    rabbit.classList.toggle("rotateAndPettingUnlifted");
                    rabbit.classList.toggle("rotateAndPettingLifted");
                }
            }
        })
    }
}

function main(){
    cardAnimation();
    activeButtons();
    rabbitPetting();
}

main();