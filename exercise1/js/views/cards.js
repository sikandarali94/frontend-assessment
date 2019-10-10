const getCardMarkup = briefText => {
    // Return markup of card based on brief text.
    return `
        <div class="card">
            <img src="../assets/img/content-placeholder.png" alt="content 400x300 placeholder" />
            <p class="card-brief-text">
                ${briefText}
            </p>
            <button class="read-more">Read More</button>
        </div>
    `;
};

export const renderCards = cardsBrief => {
    // Get element of class 'cards-container' in order to render cards inside the container.
    const cardContainer = document.querySelector('.cards-container');
    // Render cards inside 'cards-container'.
    cardsBrief.forEach(cardBrief => cardContainer.insertAdjacentHTML('beforeend', getCardMarkup(cardBrief)));
};