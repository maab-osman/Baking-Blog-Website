const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})
const recipeCards = document.querySelectorAll('.recipe-card');

// Add click event listener to each recipe card
recipeCards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle the 'expanded' class on the clicked card
    card.classList.toggle('expanded');
  });
});
const playButton = document.querySelector('.play-button');
const videoEmbed = document.querySelector('.video-embed');
const youtubeEmbed = document.querySelector('#youtube-embed');

playButton.addEventListener('click', function() {
    // Show iframe when play button is clicked
    videoEmbed.style.display = 'block';
    
    // Set the YouTube embed src dynamically to load the video
    youtubeEmbed.src = "https://www.youtube.com/embed/7THVqkb8gx4?autoplay=1";
    
    // Hide the thumbnail and play button
    document.querySelector('.video-thumbnail').style.display = 'none';
    playButton.style.display = 'none';
});
