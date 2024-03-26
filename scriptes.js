document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', function() {
        this.classList.toggle('on');
        if (this.classList.contains('on')) {
            document.body.classList.remove('white-theme');
            document.body.classList.add('black-theme');
        } else {
            document.body.classList.remove('black-theme');
            document.body.classList.add('white-theme');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
    const pronunciationElement = document.getElementById('pronunciation');
    const usageElement = document.getElementById('usage');
    const fetchWordButton = document.getElementById('fetch-word-btn');

    fetchWordButton.addEventListener('click', function() {
        fetchWordOfTheDay();
    });

    function fetchWordOfTheDay() {
        // Make an AJAX request to fetch a random word
        fetch('https://random-word-api.herokuapp.com/word?lang=es')
            .then(response => response.json())
            .then(data => {
                // Update the DOM with the fetched word details
                wordElement.textContent = data[0];
                // Clear other details as they might not be available
                definitionElement.textContent = '';
                pronunciationElement.textContent = '';
                usageElement.textContent = '';
            })
            .catch(error => {
                console.error('Error fetching word of the day:', error);
            });
    }
});
