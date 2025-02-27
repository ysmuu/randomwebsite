document.getElementById('randomWebsiteButton').addEventListener('click', () => {
    fetch('websites.json')
        .then(response => response.json())
        .then(data => {
            const randomWebsite = data[Math.floor(Math.random() * data.length)];
            window.open(randomWebsite, '_blank');
        })
        .catch(error => {
            console.error('Error fetching website data:', error);
        });
});
