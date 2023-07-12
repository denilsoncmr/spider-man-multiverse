function handleMouseEnter(){
    this.classList.add('card--hovered');
}

function handleMouseLeave(){
    this.classList.remove('card--hovered');
}

function addEventListenerToCard(){
    const cardElements = document.getElementsByClassName('card');
    for(let index = 0; index < cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenerToCard, false);