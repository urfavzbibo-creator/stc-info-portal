// Find the grid container in the HTML
const gridContainer = document.getElementById('grid-container');

// Loop through each item in the data.js file and create a button
quickAccessItems.forEach(item => {
    // Create the clickable link container
    const card = document.createElement('a');
    card.href = item.link;
    card.className = 'grid-item';

    // Add the icon and title inside the card
    card.innerHTML = `
        <div class="icon">${item.icon}</div>
        <div class="title">${item.title}</div>
    `;

    // Add the finished card to the webpage
    gridContainer.appendChild(card);
});
