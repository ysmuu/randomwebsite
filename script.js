document.getElementById('randomWebsiteButton').addEventListener('click', () => {
  fetch('websites.json')
    .then(response => response.json())
    .then(data => {
      const randomWebsite = data[Math.floor(Math.random() * data.length)];
      window.location.href = randomWebsite;
    })
    .catch(error => {
      console.error('Error fetching website data:', error);
    });
});
