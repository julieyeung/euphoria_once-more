function typeWriterEffect(element, text, speed, callback) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = "none"; // Remove cursor at the end
            if (callback) callback();
        }
    }

    type();
}

function startTypewriterEffect() {
    const elements = document.querySelectorAll('.oncemore1, .oncemore2, .oncemore3, .oncemore4' );
    let delay = 0;

    elements.forEach((element) => {
        const text = element.getAttribute("data-text") || "";
        setTimeout(() => {
            typeWriterEffect(element, text, 50);
        }, delay);
        delay += text.length * 50 + 500; // Delay based on text length
    });
}

startTypewriterEffect();