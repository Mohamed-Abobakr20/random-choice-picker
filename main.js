const textArea = document.getElementById("choices");
const choices = document.getElementById("items");
let arr = [];
let lastRandom;

textArea.addEventListener('input', (e) => {
    arr = e.target.value.split(",").filter(tag => tag.trim() !== "");
    choices.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const node = document.createElement("div");
        const textnode = document.createTextNode(arr[i]);
        node.appendChild(textnode);
        node.classList.add("item");
        choices.appendChild(node);
    }
})

textArea.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (arr.length === 0) {
            e.preventDefault();
        } else {
            e.preventDefault();
            e.target.value = '';
            const interval = setInterval(backGroundColor, 100);
            setTimeout(() => {
                clearInterval(interval);
                setTimeout(() => {
                    choices.children[lastRandom].style.backgroundColor = "#001B45";
                }, 100)
            }, 3000);
        }

    }
})

function backGroundColor() {
    const random = Math.floor(Math.random() * arr.length);
    lastRandom = random;
    choices.children[random].style.backgroundColor = "#001B45";
    setTimeout(() => {
        choices.children[random].style.backgroundColor = "orange";
    }, 100)
}