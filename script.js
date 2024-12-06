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
